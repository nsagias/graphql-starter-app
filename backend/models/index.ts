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
  User.hasMany(UserChat, {
    as: 'userChats',
    foreignKey: 'user_id'
  })
  Chat.hasMany(User, {
    as: 'users',
    foreignKey: 'chat_id'
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
