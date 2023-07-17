const express = require('express')
const cors = require('cors') // Configurar após desenvolvimento do FrontEnd
const port = process.env.PORT || 5000 
const logger = require('pino')()

logger.info('Oi eu sou Goku')

const app = express()

const conexao = require('./models/Conexao')

app.use(express.json())

const CentralRoutes = require('./routes/CentralRoutes')
const ClienteRoutes = require('./routes/ClienteRoutes')
const UsuarioRoutes = require('./routes/UsuarioRoutes')

app.use('/central', CentralRoutes)
app.use('/cliente', ClienteRoutes)
app.use('/usuario', UsuarioRoutes)

app.use('/', (req, res) => {
    res.status(200).json({mensagem: 'Sucesso - API em Node.js'})
})

conexao.sync({force: true}).then(app.listen(port)).catch((err) => console.log(err))