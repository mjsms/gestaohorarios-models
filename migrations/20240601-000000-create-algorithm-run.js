'use strict';
module.exports = {
  up: async (qi, S) => {
    await qi.createTable('algorithm_runs', {
      id:          { type: S.UUID,  defaultValue: S.UUIDV4, primaryKey: true },
      algorithm:   { type: S.STRING, allowNull: false },
      pop_size:    { type: S.INTEGER },
      n_gen:       { type: S.INTEGER },
      hv:          { type: S.FLOAT },
      started_at:  { type: S.DATE },
      finished_at: { type: S.DATE },
      created_at:  { type: S.DATE, allowNull: false },
      updated_at:  { type: S.DATE, allowNull: false }
    });
  },
  down: async (qi) => qi.dropTable('algorithm_runs')
};
