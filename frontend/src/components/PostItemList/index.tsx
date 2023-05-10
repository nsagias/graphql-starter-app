import "./PostItemList.css";
import PostItem from "../PostItem";
import { PostsItemListProps } from "./PostsItemList";


export default function PostItemList({ onPosts}: PostsItemListProps ): JSX.Element {

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