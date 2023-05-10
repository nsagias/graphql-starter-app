import { useState } from "react";
import PostFormTextArea from "../PostFormTextArea";
import { Post } from "../PostItem/PostItem";
import { PostFormProps } from "./PostForm";


export default function PostForm({ onPosts, onSetPosts }: PostFormProps ): JSX.Element {

  const [postContent, setPostContent] = useState<string>("");

  const handleSubmitPost = (e: any) => {
    e.preventDefault();

    const newPost: Post = {
      id: onPosts.length + 1,
      text: postContent,
      avatar: "/uploads/avatar1.png",
      username: "New User",
    };

    onSetPosts([newPost, ...onPosts]);
    setPostContent("");
  };

  return(
    <div className="form">
      <form onSubmit={handleSubmitPost}>
        <PostFormTextArea 
          onPostContent={postContent} 
          onSetPostContent={(e: any) => setPostContent(e.target.value)}
          placeholder="Create New Post"
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}