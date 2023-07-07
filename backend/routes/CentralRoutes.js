const router = require('express').Router()

const CentralController = require('../controllers/CentralController')

const verificarToken = require('../helpers/verificar-token')

router.get('/', CentralController.listarAvisos)
router.post('/inserir', verificarToken, CentralController.inserir)

module.exports = router