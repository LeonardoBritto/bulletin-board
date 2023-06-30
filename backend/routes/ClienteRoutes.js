const router = require('express').Router()

const ClienteController = require('../controllers/ClienteController')

router.post('/inserir', ClienteController.inserir)
router.post('/autenticar', ClienteController.autenticar)

module.exports = router