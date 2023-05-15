// console.log("DATA POST [0].USER.AVATAR", data && data.posts[0].user.avatar);
// console.log("DATA POST [0].USER.USERNAME", data && data.posts[0].user.username);
// console.log("DATA POST [0].id", data && data.posts[0].id);
// console.log("DATA POST [0].text", data && data.posts[0].text);

export type PostUserData = {
  avatar: string,
  username: string,
}

export type Post = {
  id: number,
  text: string,
  user: PostUserData
};

export type Posts = {
  [x: string]: Posts | null;
  posts: Post[]
}

export type PostItemProps = {
  post?: Post | undefined
};
