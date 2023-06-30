const router = require('express').Router()

const ClienteController = require('../controllers/ClienteController')

const checarIp = require('../helpers/checar-ip')

router.post('/inserir', ClienteController.inserir)
router.post('/autenticar', checarIp, ClienteController.autenticar)

module.exports = router