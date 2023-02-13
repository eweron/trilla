'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING
      },
      discription: {
        type: Sequelize.TEXT
      },
      seller: {
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
      carrier: {
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Orders');
  }
};