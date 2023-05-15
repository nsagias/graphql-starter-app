export type Post = {
  id: number,
  text: string,
  avatar: string,
  username: string,
};

export type PostItemProps = {
  post?: Post | undefined
};
