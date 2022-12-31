'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      email: 'mail@mail.com',
      password: bcrypt.hashSync('secret_admin_pwd', 8),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'demo',
      email: 'demo@mail.com',
      password: bcrypt.hashSync('secret_demo_pwd', 8),
      createdAt: new Date(),
      updatedAt: new Date()      
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
