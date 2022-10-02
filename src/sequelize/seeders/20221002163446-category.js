'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Cat 1',
        description: 'a description',
        image: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Cat 2',
        description: 'a description',
        image: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Cat 3',
        description: 'a description',
        image: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Cat 4',
        description: 'a description',
        image: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        title: 'Cat 5',
        description: 'a description',
        image: '',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
