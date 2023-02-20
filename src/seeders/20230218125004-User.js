
const crypto = require('crypto');
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'User',
    [
      {
        name: 'Somil Verma',
        email: 'admin@gmail.com',
        password: crypto
          .createHash('md5')
          .update('admin' || '')
          .digest('hex'),
        role: 'employee',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      },
      {
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
