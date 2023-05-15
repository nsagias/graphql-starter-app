import "./PostItem.css";
import { PostItemProps } from "./PostItem";


export default function PostItem({ post }: PostItemProps ): JSX.Element {
  return (
    <div key={post && post.id} className="post">
      <div className="header">
        <img src={post && post.avatar} />
        <h2>{post && post.username}</h2>
      </div>
      <p className="content">
        {post && post.text}
      </p>
    </div>
  );
}