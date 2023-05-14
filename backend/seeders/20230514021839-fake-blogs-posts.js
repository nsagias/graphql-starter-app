"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Get all existing users
    return queryInterface.sequelize.query(
      "SELECT id from Users;",
    ).then((users) => {
      const usersRows = users[0];
      return queryInterface.bulkInsert("Posts", [{
        text: "Lorem ipsum 1",
        user_id: usersRows[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: "Lorem ipsum 2",
        user_id: usersRows[1].id,
        created_at: new Date(),
        updated_at: new Date(),
      }],
      {});
  });
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
