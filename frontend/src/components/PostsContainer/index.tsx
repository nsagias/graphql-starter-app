import { useState } from "react";
import { Helmet } from "react-helmet";
import PostForm from "../PostForm";
import { Post } from "../PostItem/PostItem";
import PostItemList from "../PostItemList";
import { gql, useQuery} from "@apollo/client";
import "./PostsContainer.css";

const initialPosts: Post[] = [
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar1.png",
      username: "Test User 1"
    },
  },
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar2.png",
      username: "Test User 2"
    }
  },
];
export default function PostsContainer() {
  
  const GET_POSTS = gql`{
    posts {
      id
      text
      user {
        avatar
        username
      }
    }
  }`;

  const { loading, error, data } = useQuery(GET_POSTS);
 
  const [posts, setPosts] = useState<Post[]>(data && data.posts);

  return (
    <div className="container">
      <Helmet>
        <title>Blog Feed</title>
        <meta 
          name="description"
          content="Blog news feed"
        />
      </Helmet>
      { !loading && ( 
        <>
          <PostForm 
            onPosts={posts}
            onSetPosts={(posts: Post[]) => setPosts(posts)}
          />
          <PostItemList 
            onPosts={data && data.posts}
          />
        </>
      )}
    </div>
  );
}