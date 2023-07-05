const router = require('express').Router()

const ClienteController = require('../controllers/ClienteController')

const checarIp = require('../helpers/checar-ip')
const verificarToken = require('../helpers/verificar-token')

router.post('/autenticar', checarIp, ClienteController.autenticar)
router.post('/inserir', ClienteController.inserir)

module.exports = router