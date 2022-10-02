'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Food', [
      {
        title: 'Food 1',
        description: 'a description',
        image: '',
        categoryId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Food 2',
        description: 'a description',
        image: '',
        categoryId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Food 3',
        description: 'a description',
        image: '',
        categoryId: 5,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Food 4',
        description: 'a description',
        image: '',
        categoryId: 4,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Food 5',
        description: 'a description',
        image: '',
        categoryId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Food 6',
        description: 'a description',
        image: '',
        categoryId: 3,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Food', null, {});
  }
};
