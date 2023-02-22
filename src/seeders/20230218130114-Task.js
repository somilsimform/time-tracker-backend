'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Task',
    [
      {
        id: 11,
        name: 'Task 1',
        project_id: 1,
        user_id: 2,
        details: 'Task 1 desc',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 12,
        name: 'Task 2',
        project_id: 2,
        user_id: 2,
        details: 'Task 2 desc',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 13,
        name: 'Task 3',
        project_id: 3,
        user_id: 2,
        details: 'Task 3 desc',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 14,
        name: 'Task 4',
        project_id: 4,
        user_id: 2,
        details: 'Task 4 desc',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        id: 15,
        name: 'Task 5',
        project_id: 5,
        user_id: 2,
        details: 'Task 5 desc',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Task', null, {}),
};
