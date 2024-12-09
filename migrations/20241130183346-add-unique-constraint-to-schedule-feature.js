module.exports = {
  up: async (queryInterface, Sequelize) => {
      // Adiciona a restrição de unicidade
      await queryInterface.addConstraint('ScheduleFeature', {
          fields: ['scheduleId', 'featureId', 'featureType'], // Colunas que compõem a restrição
          type: 'unique',
          name: 'unique_schedule_feature_type_constraint' // Nome da restrição
      });
      await queryInterface.removeConstraint('ScheduleFeature', 'unique_schedule_feature_type_constraint');
  },

  down: async (queryInterface, Sequelize) => {
      // Remove a restrição de unicidade
      await queryInterface.removeConstraint('ScheduleFeature', 'unique_schedule_feature_type_constraint');
  }
};
