const Central = require('../models/Central')
const moment = require('moment') 
const Sequelize = require('sequelize')

module.exports = class CentralController {
    static async listarAvisos(req, res){
        const central = await Central.findAll()
        res.status(200).json({central: central})   
    }

    static async inserir(req, res){
        const {versaoftp, versaolocal, serviceguardian, central, centralservice, 
        mineradora, centralmineradora, centralautomatizado, centralmanutencao, sajlistaintaguardandociencia, 
        sajlistaintprazoiniciado, sajlistaintrecebidasportal, sajinttomarciencia,
        sajintobterteor, sajintleitura, sajlistacitaguardandociencia, sajlistacitprazoiniciado,
        sajlistacitrecebidasportal, sajcittomarciencia, sajcitobterteor, sajcitleitura,
        pjelistaavistospendentes, pjeinttomarciencia, pjecitobterteor, pjeoutrosavisostomarciencia,
        pjeoutrosavisosobterteor, pjecapturaprocessos, horaintercomunicacao1, 
        horaintercomunicacao2, horaintercomunicacao3, horaintercomunicacao4, cnpjcliente} = req.body

        let codigo = 0

        const existe = await Central.findOne({where: {cnpjcliente: cnpjcliente}})

        if(existe)
            codigo = existe.codigo
        
        const centralObj = {
            codigo, data: moment().format('YYYY-MM-DD HH:mm:ss'), versaoftp, versaolocal, 
            serviceguardian, central, centralservice, mineradora, centralmineradora, 
            centralautomatizado, centralmanutencao, sajlistaintaguardandociencia, 
            sajlistaintprazoiniciado, sajlistaintrecebidasportal, sajinttomarciencia,
            sajintobterteor, sajintleitura, sajlistacitaguardandociencia, sajlistacitprazoiniciado,
            sajlistacitrecebidasportal, sajcittomarciencia, sajcitobterteor, sajcitleitura,
            pjelistaavistospendentes, pjeinttomarciencia, pjecitobterteor, pjeoutrosavisostomarciencia,
            pjeoutrosavisosobterteor, pjecapturaprocessos, horaintercomunicacao1, 
            horaintercomunicacao2, horaintercomunicacao3, horaintercomunicacao4, cnpjcliente
        } 
        console.log(centralObj.data)
        try {
            await Central.create(centralObj)
            res.status(201).json({mensagem: 'Aviso cadastrado com sucesso'})
        } catch (error) {
            res.status(500).json({mensagem: error})    
        }
    }
}