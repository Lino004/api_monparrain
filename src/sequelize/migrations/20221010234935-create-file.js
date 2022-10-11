'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Files', {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      moveTo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      repository: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      filename: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      extension: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      foodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Food',
          key: 'id',
          as: 'foodId',
        }
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('image', 'autre'),
        defaultValue: 'autre',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Files');
  }
};