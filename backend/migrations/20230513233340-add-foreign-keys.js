const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('posts', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'posts_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('user_chats', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_chats_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('user_chats', {
      fields: ['chat_id'],
      type: 'foreign key',
      name: 'user_chats_chat_id_fkey',
      references: {
        table: 'chats',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('messages', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'messages_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('messages', {
      fields: ['chat_id'],
      type: 'foreign key',
      name: 'messages_chat_id_fkey',
      references: {
        table: 'chats',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('posts', 'posts_user_id_fkey')
    await queryInterface.removeConstraint('user_chats', 'user_chats_user_id_fkey')
    await queryInterface.removeConstraint('user_chats', 'user_chats_chat_id_fkey')
    await queryInterface.removeConstraint('messages', 'messages_user_id_fkey')
    await queryInterface.removeConstraint('messages', 'messages_chat_id_fkey')
  }
};