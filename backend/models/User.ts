import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Post } from './Post'
import type { UserChat } from './UserChat'

type UserAssociations = 'posts' | 'userChats'

export class User extends Model<
  InferAttributes<User, {omit: UserAssociations}>,
  InferCreationAttributes<User, {omit: UserAssociations}>
> {
  declare id: CreationOptional<number>
  declare avatar: string | null
  declare username: string | null
  declare email: string | null
  declare password: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // User hasMany Post
  declare posts?: NonAttribute<Post[]>
  declare getPosts: HasManyGetAssociationsMixin<Post>
  declare setPosts: HasManySetAssociationsMixin<Post, number>
  declare addPost: HasManyAddAssociationMixin<Post, number>
  declare addPosts: HasManyAddAssociationsMixin<Post, number>
  declare createPost: HasManyCreateAssociationMixin<Post, 'userId'>
  declare removePost: HasManyRemoveAssociationMixin<Post, number>
  declare removePosts: HasManyRemoveAssociationsMixin<Post, number>
  declare hasPost: HasManyHasAssociationMixin<Post, number>
  declare hasPosts: HasManyHasAssociationsMixin<Post, number>
  declare countPosts: HasManyCountAssociationsMixin
  
  // User hasMany UserChat
  declare userChats?: NonAttribute<UserChat[]>
  declare getUserChats: HasManyGetAssociationsMixin<UserChat>
  declare setUserChats: HasManySetAssociationsMixin<UserChat, number>
  declare addUserChat: HasManyAddAssociationMixin<UserChat, number>
  declare addUserChats: HasManyAddAssociationsMixin<UserChat, number>
  declare createUserChat: HasManyCreateAssociationMixin<UserChat, 'userId'>
  declare removeUserChat: HasManyRemoveAssociationMixin<UserChat, number>
  declare removeUserChats: HasManyRemoveAssociationsMixin<UserChat, number>
  declare hasUserChat: HasManyHasAssociationMixin<UserChat, number>
  declare hasUserChats: HasManyHasAssociationsMixin<UserChat, number>
  declare countUserChats: HasManyCountAssociationsMixin
  
  declare static associations: {
    posts: Association<User, Post>,
    userChats: Association<User, UserChat>
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      avatar: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return User
  }
}
