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

type MessageAssociations = 'user' | 'chat'

export class Message extends Model<
  InferAttributes<Message, {omit: MessageAssociations}>,
  InferCreationAttributes<Message, {omit: MessageAssociations}>
> {
  declare id: CreationOptional<number>
  declare text: string | null
  declare userId: string | null
  declare chatId: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Message belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // Message belongsTo Chat
  declare chat?: NonAttribute<Chat>
  declare getChat: BelongsToGetAssociationMixin<Chat>
  declare setChat: BelongsToSetAssociationMixin<Chat, number>
  declare createChat: BelongsToCreateAssociationMixin<Chat>
  
  declare static associations: {
    user: Association<Message, User>,
    chat: Association<Message, Chat>
  }

  static initModel(sequelize: Sequelize): typeof Message {
    Message.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING
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
    
    return Message
  }
}
