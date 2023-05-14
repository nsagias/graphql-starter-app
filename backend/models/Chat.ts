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
import type { Message } from './Message'
import type { User } from './User'

type ChatAssociations = 'users' | 'messages'

export class Chat extends Model<
  InferAttributes<Chat, {omit: ChatAssociations}>,
  InferCreationAttributes<Chat, {omit: ChatAssociations}>
> {
  declare id: CreationOptional<number>
  declare firstName: string | null
  declare lastName: string | null
  declare email: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Chat hasMany User
  declare users?: NonAttribute<User[]>
  declare getUsers: HasManyGetAssociationsMixin<User>
  declare setUsers: HasManySetAssociationsMixin<User, number>
  declare addUser: HasManyAddAssociationMixin<User, number>
  declare addUsers: HasManyAddAssociationsMixin<User, number>
  declare createUser: HasManyCreateAssociationMixin<User>
  declare removeUser: HasManyRemoveAssociationMixin<User, number>
  declare removeUsers: HasManyRemoveAssociationsMixin<User, number>
  declare hasUser: HasManyHasAssociationMixin<User, number>
  declare hasUsers: HasManyHasAssociationsMixin<User, number>
  declare countUsers: HasManyCountAssociationsMixin
  
  // Chat hasMany Message
  declare messages?: NonAttribute<Message[]>
  declare getMessages: HasManyGetAssociationsMixin<Message>
  declare setMessages: HasManySetAssociationsMixin<Message, number>
  declare addMessage: HasManyAddAssociationMixin<Message, number>
  declare addMessages: HasManyAddAssociationsMixin<Message, number>
  declare createMessage: HasManyCreateAssociationMixin<Message, 'chatId'>
  declare removeMessage: HasManyRemoveAssociationMixin<Message, number>
  declare removeMessages: HasManyRemoveAssociationsMixin<Message, number>
  declare hasMessage: HasManyHasAssociationMixin<Message, number>
  declare hasMessages: HasManyHasAssociationsMixin<Message, number>
  declare countMessages: HasManyCountAssociationsMixin
  
  declare static associations: {
    users: Association<Chat, User>,
    messages: Association<Chat, Message>
  }

  static initModel(sequelize: Sequelize): typeof Chat {
    Chat.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
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
    
    return Chat
  }
}
