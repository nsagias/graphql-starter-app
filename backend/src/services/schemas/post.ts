const postTypeDefinitions = `
  type Post {
    id: Int
    text: String
    user: User
  }

  type User {
    avatar: String
    username: String
  }

  type RootQuery {
    posts: [Post]
  }

  input PostInput {
    text: String!
  }
`;

export default postTypeDefinitions;