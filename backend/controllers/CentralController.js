const Central = require('../models/Central')
const moment = require('moment') 
const Sequelize = require('sequelize')

module.exports = class CentralController {
    static async listarAvisos(req, res){
        const central = await Central.findAll()
        res.status(200).json({central: central})   
    }

    static async inserir(req, res){
        const {versaoftp, versaolocal, serviceguardian, central, centralservices, 
        mineradora, centralmineradora, centralautomatizado, centralmanutencao,
        solicitalistaintimacoesaguardandociencia, solicitalistaintimacaoautoconfirmada, 
        solicitalistaintimacoesrecebidas, solicitarintimacaoaguardandocienciaato,
        solicitarintimacaoaguardandoteor, confirmacaoleituraintimacaoautoconfirmado, 
        solicitalistacitacoesaguardandociencia, solicitalistacitacoesautoconfirmada, 
        solicitalistacitacoesrecebidas, solicitarcitacaoaguardandocienciaato, 
        solicitarcitacaoaguardandoteor, confirmacaoleituracitacaoautoconfirmado, 
        consultaravisospendentespje, solicitarintimacaoaguardandocienciaatopje, 
        solicitarintimacaoaguardandoteorpje, solicitarcitacaoaguardandocienciaatopje, 
        solicitarcitacaoaguardandoteorpje, solicitaroutroaguardandocienciaatopje, 
        solicitaroutroaguardandoteorpje, consultarprocessopje, horaintercomunicacao1, 
        horaintercomunicacao2, horaintercomunicacao3, horaintercomunicacao4, cnpjcliente} = req.body
        
        let codigo = 0

        const existe = await Central.findOne({where: {cnpjcliente: cnpjcliente}})

        if(existe)
            codigo = existe.codigo
        
        const centralObj = {
            codigo, data: moment().format('YYYY-MM-DD HH:mm:ss'), versaoftp, versaolocal, 
            serviceguardian, central, centralservices, mineradora, centralmineradora, 
            centralautomatizado, centralmanutencao, solicitalistaintimacoesaguardandociencia,
            solicitalistaintimacaoautoconfirmada, solicitalistaintimacoesrecebidas,
            solicitarintimacaoaguardandocienciaato, solicitarintimacaoaguardandoteor,
            confirmacaoleituraintimacaoautoconfirmado, solicitalistacitacoesaguardandociencia,
            solicitalistacitacoesautoconfirmada, solicitalistacitacoesrecebidas,
            solicitarcitacaoaguardandocienciaato, solicitarcitacaoaguardandoteor,
            confirmacaoleituracitacaoautoconfirmado, consultaravisospendentespje,
            solicitarintimacaoaguardandocienciaatopje, solicitarintimacaoaguardandoteorpje,
            solicitarcitacaoaguardandocienciaatopje, solicitarcitacaoaguardandoteorpje,
            solicitaroutroaguardandocienciaatopje, solicitaroutroaguardandoteorpje, 
            consultarprocessopje, horaintercomunicacao1, horaintercomunicacao2, 
            horaintercomunicacao3, horaintercomunicacao4, cnpjcliente
        } 

        /*const centralObj = {
            codigo: 0, data: moment().format('YYYY-MM-DD HH:mm:ss'), versaoftp, versaolocal, 
            serviceguardian, central, centralservice, mineradora, centralmineradora, 
            centralautomatizado, centralmanutencao
        }*/

        console.log('Versao FTP: ', versaoftp)
        console.log('Versao Local: ', versaolocal)
        console.log('Service Guardian: ', serviceguardian)
        console.log('Central: ', central)
        console.log('Central Services: ', centralservices)
        console.log('Mineradora: ', mineradora)
        console.log('Central Mineradora: ', centralmineradora)
        console.log('Central Automatizado: ', centralautomatizado)
        console.log('Central Manutencao: ', centralmanutencao)
        console.log('IP: ', req.ip)
        try {
            await Central.create(centralObj)
            res.status(201).json({mensagem: 'Aviso cadastrado com sucesso'})
        } catch (error) {
            res.status(500).json({mensagem: error})    
        }
    }
}