module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('Schedule', 'classRoomId', {
          type: Sequelize.INTEGER,
          allowNull: true, // Permitir nulos
      });
  },
  down: async (queryInterface, Sequelize) => {
  
  },
};
