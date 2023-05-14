"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [{
      avatar: "/uploads/avatar1.png",
      username: "TestUser1",
      password: "abc123",
      email: "test1@example.com",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      avatar: "/uploads/avatar2.png",
      username: "TestUser2",
      password: "abc123",
      email: "test2@example.com",
      created_at: new Date(),
      updated_at: new Date(),
    }],
    {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
