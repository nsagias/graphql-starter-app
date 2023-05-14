import {
  Association,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
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
  
  // User belongsToMany UserChat
  declare userChats?: NonAttribute<UserChat[]>
  declare getUserChats: BelongsToManyGetAssociationsMixin<UserChat>
  declare setUserChats: BelongsToManySetAssociationsMixin<UserChat, number>
  declare addUserChat: BelongsToManyAddAssociationMixin<UserChat, number>
  declare addUserChats: BelongsToManyAddAssociationsMixin<UserChat, number>
  declare createUserChat: BelongsToManyCreateAssociationMixin<UserChat>
  declare removeUserChat: BelongsToManyRemoveAssociationMixin<UserChat, number>
  declare removeUserChats: BelongsToManyRemoveAssociationsMixin<UserChat, number>
  declare hasUserChat: BelongsToManyHasAssociationMixin<UserChat, number>
  declare hasUserChats: BelongsToManyHasAssociationsMixin<UserChat, number>
  declare countUserChats: BelongsToManyCountAssociationsMixin
  
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
