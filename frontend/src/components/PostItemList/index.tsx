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
       <div className="feed">
          { initialPosts && Array.isArray(initialPosts) && initialPosts.length > 0 && initialPosts.map((post) => (
            <div  key={post.id} className="post">
              <div className="header">
                <img src={post.avatar} />
                <h2>{post.username}</h2>
              </div>
              <p className="content">
                {post.text}
              </p>
            </div>
          ))}
       </div>
    </div>
  );
}