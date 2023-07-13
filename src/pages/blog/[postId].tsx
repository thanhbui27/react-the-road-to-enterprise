import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
type PostPageProps = {
  children?: React.ReactNode;
  post?: Post;
};
const PostPage: NextPage<PostPageProps> = (props) => {
  const router = useRouter();
  const { postId } = router.query;
  const { post } = props;
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Post ID: {postId}</h1>
      {post ? (
        <div>
          <div>{post.title}</div>
          <br />
          <div>{post.body}</div>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const postId = context.params?.postId;
  if (!postId) {
    return {
      props: {},
    };
  }
  const post = (await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json())) as Post;
  return {
    props: {
      post,
    },
  };
};
export default PostPage;
