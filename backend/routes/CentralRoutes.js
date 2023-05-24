const router = require('express').Router()

const CentralController = require('../controllers/CentralController')

router.get('/', CentralController.listarAvisos)
router.post('/inserir', CentralController.inserir)

module.exports = router