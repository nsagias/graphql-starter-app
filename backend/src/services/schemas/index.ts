import postTypeDef from "./post";
import userTypeDef from "./user";

const rootTypeDefinitions = `
  type RootMutation {
    addPost (
      post: PostInput!
    ): Post
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;




export default [rootTypeDefinitions, postTypeDef, userTypeDef];