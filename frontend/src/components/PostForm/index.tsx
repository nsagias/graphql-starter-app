import { useState } from "react";
import PostFormTextArea from "../PostFormTextArea";
import { PostFormProps } from "./PostForm";
import { gql, useMutation } from "@apollo/client";
import { Post, Posts } from "../PostItem/PostItem";

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

export default function PostForm({ onPosts, onSetPosts }: PostFormProps ): JSX.Element {
  const [postContent, setPostContent] = useState<string>("");
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{query: GET_POSTS}]
  });

  // const [addPost] = useMutation(ADD_POST, {
  //   update(cache, { data: { addPost } }) {
  //     const data: Posts | null = cache.readQuery({ query: GET_POSTS });
  //     if ( data && data.length) {
  //       const newData = { posts: [addPost, ...data.posts]};
  //       cache.writeQuery({ query: GET_POSTS, data: newData });
  //     }
  //   }
  // });

  const handleSubmitPost = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    addPost({ variables: { post: { text: postContent }}});
    // addPost({ variables: { post: { text: postContent },
    //   optimisticResponse: {
    //     addPost: {
    //       __typename: "Post",
    //       text: postContent,
    //       id: -1, 
    //       user: {
    //         __typeName: "User",
    //         username: "Loading...",
    //         avatar: "/public/loading.gif"
    //       }
    //     }
    //   }
    // }});


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