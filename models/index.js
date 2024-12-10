const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const sequelize = require('../config/database'); // Instância do Sequelize configurada

const db = {};

// Importar todos os modelos do diretório atual
fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Configurar associações entre modelos, se existirem
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Sincronização opcional (use em ambiente de desenvolvimento)
(async () => {
    try {
        await sequelize.sync({ alter: true }); // Use `alter: true` ou `force: true` conforme necessário
        console.log('Database synchronized. - Alter');
    } catch (err) {
        console.error('Error during database synchronization:', err);
    }
})();
// Adicionar a instância do Sequelize ao objeto `db`
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; // Exportar os modelos e a conexão
