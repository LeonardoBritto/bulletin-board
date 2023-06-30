const Cliente = require('../models/Cliente')

module.exports = class ClienteController {
    static async inserir(req, res){
        const {cnpj, nome} = req.body

        if(!cnpj){
            res.status(422).json({mensagem: "CNPJ obrigatório!"})
            return
        }

        if(!nome){
            res.status(422).json({mensagem: "Nome obrigatório!"})
            return
        }

        if(cnpj.length != 14){
            res.status(422).json({mensagem: "CNPJ incorreto!"})
            return
        }

        const clienteExistente = await Cliente.findByPk(cnpj)

        if(clienteExistente){
            res.status(422).json({mensagem: "Cliente ja cadastrado!"})
            return    
        }

        const cliente = {
            codigo: 0,
            cnpj,
            nome
        } 

        try {
            await Cliente.create(cliente)
            res.status(201).json({mensagem: 'Cliente cadastrado com sucesso!'})    
        } catch (error) {
            res.status(500).json({mensagem: error})     
        }        
    }

    static async autenticar(req, res){
        const {cnpj, email, senha} = req.body
        
        if(!cnpj || !email || !senha){
            res.status(422).json({mensagem: "Dados incompletos para autenticação!"})
            return
        }

    }
}