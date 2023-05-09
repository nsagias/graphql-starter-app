import { useState } from "react";
import { Post } from "../PostItem/PostItem";
import "./PostItemList.css";
import PostItem from "../PostItem";


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
       <div className="feed">
          { initialPosts 
            && Array.isArray(initialPosts) 
            && initialPosts.length > 0 
            && initialPosts.map((post) => (
              <PostItem post={post}/>
            )
          )}
    </div>
  );
}