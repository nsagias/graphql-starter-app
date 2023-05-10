import { useState } from "react";
import PostForm from "../PostForm";
import { Post } from "../PostItem/PostItem";
import PostItemList from "../PostItemList";
import "./PostsContainer.css";

const initialPosts: Post[] = [
  {
    id: 1,
    text: "Lorem ipsum",
    avatar: "/uploads/avatar1.png",
    username: "Test User 1"
  },
  {
    id: 2,
    text: "Lorem ipsum",
    avatar: "/uploads/avatar2.png",
    username: "Test User 2"
  },
];
export default function PostsContainer() {

  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <div className="container">
      <PostForm 
        onPosts={posts}
        onSetPosts={(posts: Post[]) => setPosts(posts)}
      />
      <PostItemList 
        onPosts={posts}
      />
    </div>
  );
}