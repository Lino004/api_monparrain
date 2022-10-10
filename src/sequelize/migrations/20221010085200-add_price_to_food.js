'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // logic for transforming into the new state
    await queryInterface.addColumn(
      'Food',
      'price',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
    );
  },

  async down (queryInterface) {
    // logic for reverting the changes
    await queryInterface.removeColumn(
      'Food',
      'price'
    );
  }
};
