module.exports = {
  up: async (queryInterface, Sequelize) => {
      // Remover a restrição existente
      await queryInterface.removeConstraint('ScheduleFeature', 'ScheduleFeature_scheduleId_featureId_key');
  },

  down: async (queryInterface, Sequelize) => {
  }
};