const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')

module.exports = class UsuarioController {
    static async salvar(req, res){
        const {login, senha} = req.body

        if(!login){
            res.status(422).json({mensagem: "Login obrigatório!"})
            return
        }

        if(!senha){
            res.status(422).json({mensagem: "Senha obrigatória!"})
            return   
        }

        const usuarioExistente = await Usuario.findOne({where: {login: login}})

        if(usuarioExistente){
            res.status(422).json({mensagem: "Usuário já cadastrado"})
            return         
        }

        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        const usuario = {
            login,
            senha: senhaHash
        } 

        try {
            await Usuario.create(usuario)      
            res.status(201).json({mensagem: 'Usuário Cadastrado com sucesso'})
        } catch (error) {
            res.status(500).json({mensagem: error})   
        }
    }
}