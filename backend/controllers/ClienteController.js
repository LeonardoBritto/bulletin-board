const Cliente = require('../models/Cliente')

module.exports = class ClienteController {
    static async inserir(req, res){
        const cliente = {
            codigo: 0,
            cnpj: "08.212.332/0001-41",
            nome: "Prefeitura Municipal de POÁ"
        } 
        
        await Cliente.create(cliente)
        res.status(201).json({mensagem: 'Cliente cadastrado com sucesso'})
    }
}