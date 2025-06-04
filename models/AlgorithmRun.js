// models/algorithmRun.js
module.exports = (sequelize, DataTypes) => {
  const AlgorithmRun = sequelize.define('AlgorithmRun', {
    id:         { type: DataTypes.UUID,  defaultValue: DataTypes.UUIDV4, primaryKey: true },
    algorithm:  DataTypes.STRING,
    pop_size:   DataTypes.INTEGER,
    n_gen:      DataTypes.INTEGER,
    hv:         DataTypes.FLOAT,
    started_at: DataTypes.DATE,
    finished_at:DataTypes.DATE
  }, { tableName: 'algorithm_runs', underscored: true });

  AlgorithmRun.associate = models => {
    AlgorithmRun.hasMany(models.Solution, { as: 'solutions', foreignKey: 'run_id' });
  };
  return AlgorithmRun;
};