'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Project',
    [
      {
        id: 1,
        name: 'Project 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 2,
        name: 'Project 2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 3,
        name: 'Project 3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 4,
        name: 'Project 4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 5,
        name: 'Project 5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Project', null, {}),
};
