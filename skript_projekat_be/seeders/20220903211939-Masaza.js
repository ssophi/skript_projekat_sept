'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Masazas', [{
      tip: 'relax',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'korektivna',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'lice',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'ledja',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      tip: 'sportska',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Masazas', null, {});
  }
};
