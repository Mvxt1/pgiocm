const Sequelize = require('sequelize')

const sequelize = require('../database/database')

const SuperAdmin = sequelize.define('super_administrador', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    apelido: {
        type: Sequelize.STRING,
        allowNull: false
    },

    senha: {
        type: Sequelize.CHAR,
        allowNull: false
    }
});

module.exports = SuperAdmin;