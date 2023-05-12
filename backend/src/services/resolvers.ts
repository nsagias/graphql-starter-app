// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };


// import logger from '../../helpers/logger';

let posts = [
    {
        id: 2,
        text: 'Lorem ipsum',
        user: {
            avatar: '/uploads/avatar1.png',
            username: 'Test User'
        }
    },
    {
        id: 1,
        text: 'Lorem ipsum',
        user: {
            avatar: '/uploads/avatar2.png',
            username: 'Test User 2'
        }
    }
];

const resolvers = {
    RootQuery: {
        posts(root: any, args: any, context: any) {
            return posts;
        },
    },
    RootMutation: {
        addPost(root: any, { post, user }: any, context: any) {
            const postObject = {
                ...post,
                user,
                id: posts.length + 1,
            };
            posts.push(postObject);
            // logger.log({ level: 'info', message: 'Post was created' });
            return postObject;
        },
    },
};

export default resolvers;