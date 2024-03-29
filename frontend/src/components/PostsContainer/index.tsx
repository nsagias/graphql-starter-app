import { useState } from "react";
import { Helmet } from "react-helmet";
import PostForm from "../PostForm";
import { Post } from "../PostItem/PostItem";
import PostItemList from "../PostItemList";
import { gql, useQuery, useMutation } from "@apollo/client";
import "./PostsContainer.css";


const ADD_POST = gql(/* GraphQL */`
  mutation  addPost($post: PostInput!) {
    addPost(post: $post) {
      id
      text
      user {
        username
        avatar
      }
    }
  }
`);

const GET_POSTS = gql(/* GraphQL */`{
  posts {
    id
    text
    user {
      avatar
      username
    }
  }
}`);

export default function PostsContainer() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [addPost] = useMutation(ADD_POST);
 
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