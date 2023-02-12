'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserRoles', [
    {
      userId: 1, //admin - administrator
      roleId: 1
    },
    {
      userId: 2, //demo - user
      roleId: 3
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
