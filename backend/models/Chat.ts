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

  // Chat belongsToMany User
  declare users?: NonAttribute<User[]>
  declare getUsers: BelongsToManyGetAssociationsMixin<User>
  declare setUsers: BelongsToManySetAssociationsMixin<User, number>
  declare addUser: BelongsToManyAddAssociationMixin<User, number>
  declare addUsers: BelongsToManyAddAssociationsMixin<User, number>
  declare createUser: BelongsToManyCreateAssociationMixin<User>
  declare removeUser: BelongsToManyRemoveAssociationMixin<User, number>
  declare removeUsers: BelongsToManyRemoveAssociationsMixin<User, number>
  declare hasUser: BelongsToManyHasAssociationMixin<User, number>
  declare hasUsers: BelongsToManyHasAssociationsMixin<User, number>
  declare countUsers: BelongsToManyCountAssociationsMixin
  
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
