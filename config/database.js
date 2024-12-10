// config/database.js
const { Sequelize } = require('sequelize');

// Configurar a conexão com o PostgreSQL
const sequelize = new Sequelize('gestaohorarios', 'gestaohorarios', 'menezes91', {
    host: 'my',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});


module.exports = sequelize;