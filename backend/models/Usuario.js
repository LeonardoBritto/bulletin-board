const { DataTypes } = require('sequelize')
const db = require('./Conexao')

const Usuario = db.define('Usuario', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {freezeTableName: true, timestamps: false})

module.exports = Usuario