// import logger from '../../helpers/logger';

import { Post, User } from "../../models";


const resolvers = {
    Post: {
      async user(post: { getUser: () => any; }, args: any, context: any ) {
        try {
          if (!post) throw new Error("Missing post data");
          return post.getUser();
          } catch (error) {
            console.log(error);
        }
      }
    },
    RootQuery: {
        async posts(root: any, args: null, context: any) {
          try {
            const posts = await Post.findAll({
              order: [["createdAt", "DESC"]]
            });
            console.log("POSTS", posts);
            return posts;
          } catch (error) {
            console.log(error);
          }
        },
    },
    RootMutation: {
        // async addPost(root: any, { post, user }: any, context: any) {
        async addPost(root: any, { post }: any, context: any) {
          try {
            if (!post) throw new Error("Missing new post data");
            // Get all users
            const users = await User.findAll();
            // manually assign user from userlist // dev
            const usersRow = users[0];

            const newPost = await Post.create({ ...post });
            await newPost.setUser(usersRow.id);
            // logger.log({ level: 'info', message: 'Post was created' });
            return newPost;
            } catch (error) {
              console.log(error);
          }   
        },
    },
};

export default resolvers;