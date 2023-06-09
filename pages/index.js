import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

// destructuring our posts from getStaticProps
export default function Home({ posts }) {
  // console.log(posts)
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* here we are using post widget without providing it a slug and a category , 
            so ,it will act as recent post */}
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// getStaticProps will Fetch data at build time and will pass it as props
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
