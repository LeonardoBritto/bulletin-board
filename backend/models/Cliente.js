const { DataTypes } = require('sequelize')
const db = require('./Conexao')

const Cliente = db.define('Cliente', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cnpj: {
        type: DataTypes.STRING(18),
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
}, {freezeTableName: true, timestamps: false})

module.exports = Cliente