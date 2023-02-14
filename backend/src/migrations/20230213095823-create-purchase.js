'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      discription: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      supplier: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Counterparties',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      customer: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Counterparties',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      paidAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deliveredAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Purchases');
  }
};