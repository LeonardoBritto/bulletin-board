const { DataTypes } = require('sequelize')
const db = require('./Conexao')

const Usuario = require('./Usuario')

const Permissoes = db.define('Permissoes', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paineladm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    senha: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {freezeTableName: true, timestamps: false})

Permissoes.hasOne(Usuario, {foreignKey: codusuario})
Usuario.belongsTo(Permissoes)

module.exports = Permissoes