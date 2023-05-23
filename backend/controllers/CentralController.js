const Central = require('../models/Central')

module.exports = class CentralController {
    static async listarAvisos(req, res){
       const central = await Central.findAll()
        res.status(200).json({central: central})   
    }
}