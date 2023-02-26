'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Purchases',
      'orderId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        allowNull: true,
        onDelete: 'CASCADE'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Purchases', 'orderId')
  }
};
