// models/solution.js
module.exports = (sequelize, DataTypes) => {
  const Solution = sequelize.define('Solution', {
    id:          { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    run_id:      { type: DataTypes.UUID, allowNull: false },
    external_id: DataTypes.INTEGER,
    metrics:     DataTypes.JSONB
  }, { tableName: 'solutions', underscored: true });

  Solution.associate = models => {
    Solution.belongsTo(models.AlgorithmRun, { foreignKey: 'run_id', as: 'run' });
    Solution.hasMany(models.Allocation,   { foreignKey: 'solution_id',  as: 'allocations' });
  };
  return Solution;
};
