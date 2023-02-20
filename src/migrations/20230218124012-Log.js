

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Log', {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Task',
        key: 'id'
      }
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    project_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'id'
      }
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    starttime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endtime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    employee_comment: {
      type: Sequelize.TEXT,
    },
    reviewer_comment: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    deletedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Log'),
};
