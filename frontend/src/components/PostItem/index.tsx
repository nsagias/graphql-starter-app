import "./PostItem.css";
import { Post } from "./PostItem";

export default function PostItem({ post }: { post: Post }) {
  return (
    <div key={post.id} className="post">
      <div className="header">
        <img src={post.avatar} />
        <h2>{post.username}</h2>
      </div>
      <p className="content">
        {post.text}
      </p>
    </div>
  );
}