'use strict';
module.exports = {
  up: async (qi, S) => {
    await qi.createTable('allocations', {
      id:          { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      solution_id: { type: S.UUID, allowNull: false,
                     references: { model: 'solutions', key: 'id' },
                     onDelete: 'CASCADE' },
      class_id:    { type: S.INTEGER },
      slot_id:     { type: S.INTEGER },
      room_id:     { type: S.INTEGER },
      created_at:  { type: S.DATE, allowNull: false },
      updated_at:  { type: S.DATE, allowNull: false }
    });
  },
  down: async (qi) => qi.dropTable('allocations')
};
