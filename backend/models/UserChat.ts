import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Chat } from './Chat'
import type { User } from './User'

type UserChatAssociations = 'user' | 'chat'

export class UserChat extends Model<
  InferAttributes<UserChat, {omit: UserChatAssociations}>,
  InferCreationAttributes<UserChat, {omit: UserChatAssociations}>
> {
  declare id: CreationOptional<number>
  declare userId: string | null
  declare chatId: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // UserChat belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // UserChat belongsTo Chat
  declare chat?: NonAttribute<Chat>
  declare getChat: BelongsToGetAssociationMixin<Chat>
  declare setChat: BelongsToSetAssociationMixin<Chat, number>
  declare createChat: BelongsToCreateAssociationMixin<Chat>
  
  declare static associations: {
    user: Association<UserChat, User>,
    chat: Association<UserChat, Chat>
  }

  static initModel(sequelize: Sequelize): typeof UserChat {
    UserChat.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING
      },
      chatId: {
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
    
    return UserChat
  }
}
