'use strict';
module.exports = {
  up: async (qi, S) => {
    await qi.createTable('solutions', {
      id:          { type: S.UUID, defaultValue: S.UUIDV4, primaryKey: true },
      run_id:      { type: S.UUID, allowNull: false,
                     references: { model: 'algorithm_runs', key: 'id' },
                     onDelete: 'CASCADE' },
      external_id: { type: S.INTEGER },                     // id da API
      metrics:     { type: S.JSONB, allowNull: false },     // {conflicts, waste…}
      created_at:  { type: S.DATE, allowNull: false },
      updated_at:  { type: S.DATE, allowNull: false }
    });
  },
  down: async (qi) => qi.dropTable('solutions')
};
