import { useState } from "react";
import PostFormTextArea from "../PostFormTextArea";


export default function PostForm() {
  const [postContent, setPostContent] = useState();
  const handleSubmitPost = (e: any) => {};

  return(
    <div className="form">
      <form onSubmit={handleSubmitPost}>
        <PostFormTextArea />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}