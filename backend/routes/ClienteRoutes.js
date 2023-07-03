const router = require('express').Router()

const ClienteController = require('../controllers/ClienteController')

const checarIp = require('../helpers/checar-ip')
const verificarToken = require('../helpers/verificar-token')

router.post('/inserir', verificarToken, ClienteController.inserir)
router.post('/autenticar', checarIp, ClienteController.autenticar)

module.exports = router