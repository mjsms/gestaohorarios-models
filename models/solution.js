module.exports = (sequelize, DataTypes) => {

  const Solution = sequelize.define('Solution', {
    id:          { type: DataTypes.UUID,   primaryKey: true,
                   defaultValue: DataTypes.UUIDV4 },

    run_id:      { type: DataTypes.UUID,   allowNull: false },
    external_id: { type: DataTypes.INTEGER,allowNull: false },

    conflicts:   { type: DataTypes.INTEGER, allowNull: false },
    waste:       { type: DataTypes.INTEGER, allowNull: false },
    utilisation: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    gaps:        { type: DataTypes.INTEGER, allowNull: false }

  }, {
    tableName : 'Solution',
    timestamps: true            // createdAt / updatedAt automáticos
  });

  Solution.associate = models => {
    Solution.belongsTo(models.AlgorithmRun, {
      foreignKey: 'run_id',
      as: 'run'
    });

    Solution.hasMany(models.Allocation, {
      foreignKey: 'solution_id',
      as: 'allocations'
    });
  };

  return Solution;
};
