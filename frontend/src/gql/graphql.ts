/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type PostInput = {
  text: Scalars['String'];
};

export type RootMutation = {
  __typename?: 'RootMutation';
  addPost?: Maybe<Post>;
};


export type RootMutationAddPostArgs = {
  post: PostInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  avatar: Scalars['String'];
  username: Scalars['String'];
};
