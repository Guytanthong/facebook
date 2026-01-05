import CreatePost from "./createpost";
import Post from "./post";

const posts = [
  { id: 1, author: "Mark Zuckerberg", content: "Welcome to Facebook" },
  { id: 2, author: "John Doe", content: "Building a Facebook clone 👨‍💻" },
];

export default function Feed() {
  return (
    <section className="space-y-4">
      <CreatePost />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}