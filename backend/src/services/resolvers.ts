// import logger from '../../helpers/logger';

import { Post } from "../../models";


const resolvers = {
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
        
          // logger.log({ level: 'info', message: 'Post was created' });
          const newPostObject = await Post.create({ text: post.text });
          return newPostObject;
          
        },
    },
};

export default resolvers;