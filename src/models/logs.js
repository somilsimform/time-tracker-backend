

module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define(
    'Log',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      starttime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endtime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      employee_comment: {
        type: DataTypes.TEXT,
      },
      reviewer_comment: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deletedAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    },
    {
      freezeTableName: true,
    }
  );
  Log.associate = function (models) {
    // associations can be defined here
    Log.belongsTo(models.Task, { foreignKey: 'task_id', targetKey: 'id' })
    Log.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' })
    Log.belongsTo(models.Project, { foreignKey: 'project_id', targetKey: 'id' })
  };
  return Log;
};
