import PostHeader from "./postheader";
import PostContent from "./postcontent";
import PostActions from "./postactions";

export default function Post({ post }) {
  return (
    <article className="bg-[#242526] rounded-lg p-4 text-white space-y-3">
      <PostHeader author={post.author} />
      <PostContent content={post.content} />
      <PostActions />
    </article>
  );
}