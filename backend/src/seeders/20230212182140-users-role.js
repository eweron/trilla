'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      name: 'administrator',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'moderator',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});

  }
};
