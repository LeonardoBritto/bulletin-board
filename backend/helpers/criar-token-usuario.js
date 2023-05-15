const jwt = require('jsonwebtoken')

const criarTokenUsuario = async(usuario, req, res) => {
    const token = jwt.sign({
        login: usuario.login,
        codigo: usuario.codigo
    }, 'integrativa')
    
    res.status(200).json({mensagem: 'Voce esta autenticado!', token: token})
}

module.exports = criarTokenUsuario