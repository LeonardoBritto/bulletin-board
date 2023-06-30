const Cliente = require('../models/Cliente')

const bcrypt = require('bcrypt')

//Helpers
const criarClienteTokenApi = require('../helpers/criar-token-cliente-api')

module.exports = class ClienteController {
    static async inserir(req, res){
        const {cnpj, nome, usuario, senha, ipacesso} = req.body

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

        const salt = await bcrypt.genSalt(10)
        const senhaHash= await bcrypt.hash(senha, salt)

        const cliente = {
            codigo: 0,
            cnpj,
            nome, 
            usuario, 
            senha: senhaHash, 
            ipacesso
        } 

        try {
            await Cliente.create(cliente)
            res.status(201).json({mensagem: 'Cliente cadastrado com sucesso!'})    
        } catch (error) {
            res.status(500).json({mensagem: error})     
        }        
    }

    static async autenticar(req, res){
        const {cnpj, usuario, senha} = req.body
        
        if(!cnpj || !usuario || !senha){
            return res.status(422).json({mensagem: "Dados incompletos para autenticação!"})            
        }

        const cliente = await Cliente.findOne({where: {cnpj: cnpj}})

        if(!cliente){
            return res.status(422).json({mensagem: "Cliente não consta na base de dados!"})
        }

        if(usuario != cliente.usuario){
            return res.status(422).json({mensagem: "Usuário incorreto!"})   
        }

        const checarSenha = await bcrypt.compare(senha, cliente.senha)

        if(!checarSenha){
            return res.status(422).json({mensagem: "Senha incorreta!"})  
        }

        await criarClienteTokenApi(cliente, req, res)
    }
}