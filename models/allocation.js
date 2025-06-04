// models/allocation.js
module.exports = (sequelize, DataTypes) => {
  const Allocation = sequelize.define('Allocation', {
    id:          { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    solution_id: { type: DataTypes.UUID, allowNull: false },
    class_id:    DataTypes.INTEGER,
    slot_id:     DataTypes.INTEGER,
    room_id:     DataTypes.INTEGER
  }, { tableName: 'allocations', underscored: true });

  Allocation.associate = models => {
    Allocation.belongsTo(models.Solution, { foreignKey: 'solution_id', as: 'solution' });
  };
  return Allocation;
};
