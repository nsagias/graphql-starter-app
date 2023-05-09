import PostForm from "../PostForm";
import PostItemList from "../PostItemList";
import "./PostsContainer.css";

export default function PostsContainer() {
  return (
    <div className="container">
      <PostForm />
      <PostItemList />
    </div>
  );
}