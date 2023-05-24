const { DataTypes } = require('sequelize')
const db = require('./Conexao')

const Cliente = db.define('Cliente', {
    cnpj: {
        type: DataTypes.STRING(14),
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
}, {freezeTableName: true, timestamps: false})

module.exports = Cliente