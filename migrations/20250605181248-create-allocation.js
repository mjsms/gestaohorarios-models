/* 20240605121000-create-allocation.js */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('Allocation', {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },

      solution_id: {                       // FK → Solution
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'Solution', key: 'id' },
        onDelete: 'CASCADE'
      },

      class_id: { type: DataTypes.INTEGER, allowNull: false },
      slot_id : { type: DataTypes.INTEGER, allowNull: false },
      room_id : { type: DataTypes.INTEGER, allowNull: false },

      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });

    await queryInterface.addIndex('Allocation', ['solution_id']);
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Allocation');
  }
};
