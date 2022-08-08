'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Documents', [
      {
        name: 'Документ один',
        text: 'доп информация о документе 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Документ два',
        text: 'доп информация о документе 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Документ три',
        text: 'доп информация о документе 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Документ четыре',
        text: 'доп информация о документе 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Не Документ один',
        text: 'доп информация о документе 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'за Документ один',
        text: 'доп информация о документе 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'При Документ один',
        text: 'доп информация о документе 7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Documents', null, {});
  }
};
