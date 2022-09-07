'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Prostorijas', [{
      tip: 'baletska',
      broj_sale: '1',
      povrsina: '20',
      kapacitet: '10',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'penjacka',
      broj_sale: '5',
      povrsina: '40',
      kapacitet: '20',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'cross-fit',
      broj_sale: '3',
      povrsina: '20',
      kapacitet: '5',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'teretana',
      broj_sale: '2',
      povrsina: '20',
      kapacitet: '10',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'masaza',
      broj_sale: '7',
      povrsina: '10',
      kapacitet: '2',
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Prostorijas', null, {});
  }
};
