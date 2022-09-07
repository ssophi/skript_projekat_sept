'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trenings', [{
     tip: 'balet',
     trenerId: 1,
     prostorijaId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
     tip: 'cross-fit',
     trenerId: 1,
     prostorijaId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
     tip: 'kick-box',
     trenerId: 3,
     prostorijaId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
     tip: 'penjanje',
     trenerId: 1,
     prostorijaId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
     tip: 'yoga',
     trenerId: 3,
     prostorijaId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
     }]);
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trenings', null, {});
  }
};
