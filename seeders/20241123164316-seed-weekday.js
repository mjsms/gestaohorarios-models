module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Weekday', [
          { name: 'Domingo', abbreviation: 'Dom', isHoliday: true },
          { name: 'Segunda', abbreviation: 'Seg', isHoliday: false },
          { name: 'Terça', abbreviation: 'Ter', isHoliday: false },
          { name: 'Quarta', abbreviation: 'Qua', isHoliday: false },
          { name: 'Quinta', abbreviation: 'Qui', isHoliday: false },
          { name: 'Sexta', abbreviation: 'Sex', isHoliday: false },
          { name: 'Sábado', abbreviation: 'Sáb', isHoliday: true }
      ]);
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Weekday', null, {});
  }
};
