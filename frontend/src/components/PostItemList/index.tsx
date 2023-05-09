import { useState } from "react";
import { Post } from "../PostItem/PostItem";
import "./PostItemList.css";


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

export default function PostItemList() {
  const [posts, setPost] = useState<Post[]>(initialPosts);

  return (
    <div className="container">
      here
    </div>
  );
}