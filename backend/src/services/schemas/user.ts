const userTypeDefinitions = `
  type User {
    avatar: String
    username: String
  }
 
  input UserInput {
    username: String!
    avatar: String!
  }
`;

export default userTypeDefinitions;