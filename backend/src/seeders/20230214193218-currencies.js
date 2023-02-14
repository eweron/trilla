'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Currencies', [
      {
        name: 'USD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'EUR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CNY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RUB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Currencies', null, {});
  }
};
