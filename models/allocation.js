module.exports = (sequelize, DataTypes) => {
  const Allocation = sequelize.define('Allocation', {
    id         : { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    solution_id: { type: DataTypes.UUID, allowNull: false },
    class_id   : { type: DataTypes.INTEGER, allowNull: false },
    slot_id    : { type: DataTypes.INTEGER, allowNull: false },
    room_id    : { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'Allocation'
  });

  Allocation.associate = models => {
    Allocation.belongsTo(models.Solution, { foreignKey: 'solution_id', as: 'solution' });
  };

  return Allocation;
};
