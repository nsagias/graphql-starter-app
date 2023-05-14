const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_chats', {
      userChatId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'user_chat_id',
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'user_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_chats');
  },
};