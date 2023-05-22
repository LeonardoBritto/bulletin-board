const { DataTypes } = require('sequelize')
const db = require('./Conexao')

const Mineracao = db.define('Mineracao', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data: {
        type: DataTypes.DATE,        
    },
    versaoftp: {
        type: DataTypes.CHAR(5),
    },
    versaolocal: {
        type: DataTypes.CHAR(5)
    },
    mineracaointnaolocalizadas: {
        type: DataTypes.STRING(15)
    },
    mineracaoicitnaolocalizadas: {
        type: DataTypes.STRING(15)
    },
    mineracaoipubnaolocalizadas: {
        type: DataTypes.STRING(15)
    },
    mineracaoprocessosmonitorados: {
        type: DataTypes.STRING(15)
    },
    mineracaoprocessosrequisitorios: {
        type: DataTypes.STRING(15)
    },
}, {freezeTableName: true, timestamps: false})

module.exports = Mineracao