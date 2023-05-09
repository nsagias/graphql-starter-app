import { useState } from "react";
import PostFormTextArea from "../PostFormTextArea";
import { Post } from "../PostItem/PostItem";


export default function PostForm({ onPosts, onSetPosts }: { onPosts: Post[], onSetPosts: () => void}): JSX.Element {
  const [postContent, setPostContent] = useState<Post>();
  const handleSubmitPost = (e: any) => {
  //   e.preventDefault();
  //   const newPost = {
  //     id: posts.length + 1,
  //     text: postContent,
  //     user: {
  //         avatar: '/uploads/avatar1.png',
  //         username: 'Fake User'
  //     }
  // };

  // setPosts([newPost, ...posts]);

  // setPostContent("");
   
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