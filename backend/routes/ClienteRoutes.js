const router = require('express').Router()

const ClienteController = require('../controllers/ClienteController')

router.post('/inserir', ClienteController.inserir)

module.exports = router