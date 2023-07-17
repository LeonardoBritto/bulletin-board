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

        //const existe = await Central.findOne({where: {cnpjcliente: cnpjcliente}})

        //if(existe)
            //codigo = existe.codigo
        
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

        try {
            //if(codigo != 0)
                //await Central.update(centralObj, {where: {codigo: codigo}})
            //else
                await Central.create(centralObj)

            res.status(201).json({mensagem: 'Aviso cadastrado com sucesso'})
        } catch (error) {
            res.status(500).json({mensagem: error}) 
            console.log(error)   
        }
    }
}