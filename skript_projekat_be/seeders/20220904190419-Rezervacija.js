'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rezervacijas', [{
      korisnikId: 3,
      terminId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      korisnikId: 1,
      terminId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      korisnikId: 3,
      terminId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      korisnikId: 1,
      terminId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      korisnikId: 3,
      terminId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rezervacijas', null, {});
  }
};
