const { DataTypes } = require('sequelize')
const db = require('./Conexao')
const Cliente = require('./Cliente')

const Central = db.define('Central', {
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
    serviceguardian: {
        type: DataTypes.STRING(15)
    },
    central: {
        type: DataTypes.STRING(15)
    },
    centralservices: {
        type: DataTypes.STRING(15)
    },
    mineradora: {
        type: DataTypes.STRING(15)
    },
    centralmineradora: {
        type: DataTypes.STRING(15)
    },
    centralautomatizado: {
        type: DataTypes.STRING(15)
    },
    centralmanutencao: {
        type: DataTypes.STRING(15)
    },
    sajlistaintaguardandociencia: {
        type: DataTypes.STRING(15)
    },
    sajlistaintprazoiniciado: {
        type: DataTypes.STRING(15)
    },
    sajlistaintrecebidasportal: {
        type: DataTypes.STRING(15)
    },
    sajinttomarciencia: {
        type: DataTypes.STRING(15)
    },
    sajintobterteor: {
        type: DataTypes.STRING(15)
    },
    sajintleitura: {
        type: DataTypes.STRING(15)
    },
    sajlistacitaguardandociencia: {
        type: DataTypes.STRING(15)
    },
    sajlistacitprazoiniciado: {
        type: DataTypes.STRING(15)
    },
    sajlistacitrecebidasportal: {
        type: DataTypes.STRING(15)
    },
    sajcittomarciencia: {
        type: DataTypes.STRING(15)
    },
    sajcitobterteor: {
        type: DataTypes.STRING(15)
    },
    sajcitleitura: {
        type: DataTypes.STRING(15)
    },
    pjelistaavistospendentes: {
        type: DataTypes.STRING(15)
    },
    pjeinttomarciencia: {
        type: DataTypes.STRING(15)
    },
    pjeintobterteor: {
        type: DataTypes.STRING(15)
    },
    pjecittomarciencia: {
        type: DataTypes.STRING(15)
    },
    pjecitobterteor: {
        type: DataTypes.STRING(15)
    },
    pjeoutrosavisostomarciencia: {
        type: DataTypes.STRING(15)
    },
    pjeoutrosavisosobterteor: {
        type: DataTypes.STRING(15)
    },
    pjecapturaprocessos: {
        type: DataTypes.STRING(15)
    },
    horaintercomunicacao1: {
        type: DataTypes.TIME
    },
    horaintercomunicacao2: {
        type: DataTypes.TIME
    },
    horaintercomunicacao3: {
        type: DataTypes.TIME
    },
    horaintercomunicacao4: {
        type: DataTypes.TIME
    }    
}, {freezeTableName: true, timestamps: false})

Central.belongsTo(Cliente, {constraints: true, foreignKey: 'cnpjcliente'})

module.exports = Central