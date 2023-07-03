const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000 

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

conexao.sync().then(app.listen(port)).catch((err) => console.log(err))