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
    solicitalistaintimacoesaguardandociencia: {
        type: DataTypes.STRING(15)
    },
    solicitalistaintimacaoautoconfirmada: {
        type: DataTypes.STRING(15)
    },
    solicitalistaintimacoesrecebidas: {
        type: DataTypes.STRING(15)
    },
    solicitarintimacaoaguardandocienciaato: {
        type: DataTypes.STRING(15)
    },
    solicitarintimacaoaguardandoteor: {
        type: DataTypes.STRING(15)
    },
    confirmacaoleituraintimacaoautoconfirmado: {
        type: DataTypes.STRING(15)
    },
    solicitalistacitacoesaguardandociencia: {
        type: DataTypes.STRING(15)
    },
    solicitalistacitacoesautoconfirmada: {
        type: DataTypes.STRING(15)
    },
    solicitalistacitacoesrecebidas: {
        type: DataTypes.STRING(15)
    },
    solicitarcitacaoaguardandocienciaato: {
        type: DataTypes.STRING(15)
    },
    solicitarcitacaoaguardandoteor: {
        type: DataTypes.STRING(15)
    },
    confirmacaoleituracitacaoautoconfirmado: {
        type: DataTypes.STRING(15)
    },
    consultaravisospendentespje: {
        type: DataTypes.STRING(15)
    },
    solicitarintimacaoaguardandocienciaatopje: {
        type: DataTypes.STRING(15)
    },
    solicitarintimacaoaguardandoteorpje: {
        type: DataTypes.STRING(15)
    },
    solicitarcitacaoaguardandocienciaatopje: {
        type: DataTypes.STRING(15)
    },
    solicitarcitacaoaguardandoteorpje: {
        type: DataTypes.STRING(15)
    },
    solicitaroutroaguardandocienciaatopje: {
        type: DataTypes.STRING(15)
    },
    solicitaroutroaguardandoteorpje: {
        type: DataTypes.STRING(15)
    },
    consultarprocessopje: {
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