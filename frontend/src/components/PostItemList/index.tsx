import "./PostItemList.css";
import PostItem from "../PostItem";
import { Post } from "../PostItem/PostItem";

export default function PostItemList({ onPosts}:{ onPosts: Post[] }): JSX.Element {

  return (
       <div className="feed">
          { onPosts 
            && Array.isArray(onPosts) 
            && onPosts.length > 0 
            && onPosts.map((post) => (
              <PostItem key={post.id} post={post}/>
            )
          )}
    </div>
  );
}