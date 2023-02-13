'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserRoles', [
    {
      userId: 1, //admin - administrator
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2, //demo - user
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
