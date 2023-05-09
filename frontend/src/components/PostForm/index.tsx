import { useState } from "react";

export default function PostForm() {
  const [postContent, setPostContent] = useState();

  const handleSubmitPost = (e: any) => {}

  return(
    <div className="form">
      <form onSubmit={handleSubmitPost}>
        <textarea 
          value={postContent}
          placeholder="Create New Post!"
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}