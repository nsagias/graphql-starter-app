import type { Sequelize, Model } from 'sequelize'
import { Post } from './Post'
import { User } from './User'
import { Chat } from './Chat'
import { UserChat } from './UserChat'
import { Message } from './Message'

export {
  Post,
  User,
  Chat,
  UserChat,
  Message
}

export function initModels(sequelize: Sequelize) {
  Post.initModel(sequelize)
  User.initModel(sequelize)
  Chat.initModel(sequelize)
  UserChat.initModel(sequelize)
  Message.initModel(sequelize)

  Post.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })
  User.hasMany(Post, {
    as: 'posts',
    foreignKey: 'user_id'
  })
  User.belongsToMany(UserChat, {
    as: 'userChats',
    through: 'user_chats',
    foreignKey: 'user_id',
    otherKey: 'user_chat_id',
    onDelete: 'CASCADE'
  })
  Chat.belongsToMany(User, {
    as: 'users',
    through: 'user_chats',
    foreignKey: 'chat_id',
    otherKey: 'user_id',
    onDelete: 'CASCADE'
  })
  Chat.hasMany(Message, {
    as: 'messages',
    foreignKey: 'chat_id'
  })
  UserChat.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })
  UserChat.belongsTo(Chat, {
    as: 'chat',
    foreignKey: 'chat_id'
  })
  Message.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })
  Message.belongsTo(Chat, {
    as: 'chat',
    foreignKey: 'chat_id'
  })

  return {
    Post,
    User,
    Chat,
    UserChat,
    Message
  }
}
