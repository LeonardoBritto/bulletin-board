const Cliente = require('../models/Cliente')

const checarIp = async (req, res, next) => {
    const ipacesso = req.ip

    const cliente = await Cliente.findOne({where: {ipacesso: ipacesso}})

    if(!cliente){
        return res.status(401).json({message: "Acesso Negado! - Ip Bloqueado"})
    }
    
    next()
}

module.exports = checarIp