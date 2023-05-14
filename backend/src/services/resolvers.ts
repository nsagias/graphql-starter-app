// import logger from '../../helpers/logger';

import { Post, User } from "../../models";


const resolvers = {
    Post: {
      user(post: { getUser: () => any; }, args: any, context: any ) {
        return post.getUser();
      }
    },
    RootQuery: {
        async posts(root: any, args: any, context: any) {
          const posts = await Post.findAll({
            order: [["createdAt", "DESC"]]
          });
          console.log("posts", posts);
          return posts;
        },
    },
    RootMutation: {
        // async addPost(root: any, { post, user }: any, context: any) {
        async addPost(root: any, { post }: any, context: any) {

          // Get all users
          const users = await User.findAll();
          // manually assign user from userlist // dev
          const usersRow = users[0];

          const newPost = await Post.create({ ...post });
          newPost.setUser(usersRow.id);
          // logger.log({ level: 'info', message: 'Post was created' });
          return newPost;
          
        },
    },
};

export default resolvers;