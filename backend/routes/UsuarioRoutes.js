const router = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

router.post('/registrar', UsuarioController.salvar)
router.get('/login', UsuarioController.logar)

module.exports = router