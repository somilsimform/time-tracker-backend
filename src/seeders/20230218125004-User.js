
const crypto = require('crypto');
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'User',
    [
      {
        id: 1,
        name: 'Somil Verma',
        email: 'admin@gmail.com',
        password: crypto
          .createHash('md5')
          .update('admin' || '')
          .digest('hex'),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      },
      {
        id: 2,
        name: 'Adam Evans',
        email: 'emp@gmail.com',
        password: crypto
          .createHash('md5')
          .update('employee' || '')
          .digest('hex'),
        role: 'employee',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};
