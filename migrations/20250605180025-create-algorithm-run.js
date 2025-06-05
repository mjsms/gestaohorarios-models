/* 20240605115900-create-algorithm-run.js */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('AlgorithmRun', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      algorithm : { type: DataTypes.STRING,  allowNull:false },
      pop_size  : { type: DataTypes.INTEGER, allowNull:false },
      n_gen     : { type: DataTypes.INTEGER, allowNull:false },
      hv        : { type: DataTypes.DECIMAL(12,6) , allowNull:true },

      started_at : { type: DataTypes.DATE, allowNull:false },
      finished_at: { type: DataTypes.DATE, allowNull:false },

      createdAt: { type: DataTypes.DATE, allowNull:false, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, allowNull:false, defaultValue: DataTypes.NOW }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('AlgorithmRun');
  }
};
