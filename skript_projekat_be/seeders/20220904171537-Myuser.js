'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Myusers', [{
     username: 'ari',
     password: bcrypt.hashSync('hrana2201',10),
     ime: 'Ari',
     prezime: 'Aricon',
     email: 'aricon@ari.com',
     tip_clanarine: 'clasic',
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
    username: 'goga',
    password: bcrypt.hashSync( 'goga1228',10),
    ime: 'Goga',
    prezime: 'Gogicon',
    email: 'goga@ari.com',
    tip_clanarine: 'exclusive',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    username: 'coka',
    password: bcrypt.hashSync( 'coka54',10),
    ime: 'Coka',
    prezime: 'Cokic',
    email: 'coka@ari.com',
    tip_clanarine: 'clasic',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    username: 'boki',
    password: bcrypt.hashSync( 'boki149',10),
    ime: 'Boki',
    prezime: 'Bokicon',
    email: 'boki@ari.com',
    tip_clanarine: 'exclusive',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    username: 'corto',
    password: bcrypt.hashSync( 'nikolaus13',10),
    ime: 'Nikola',
    prezime: 'Corto',
    email: 'corto@ari.com',
    tip_clanarine: 'exclusive',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Myusers', null, {});
  }
};
