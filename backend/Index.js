const express = require('express')
const cors = require('cors')
const port = 5000 

const app = express()

const conexao = require('./models/Conexao')

app.use(express.json())

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

const CentralRoutes = require('./routes/CentralRoutes')
const ClienteRoutes = require('./routes/ClienteRoutes')
const UsuarioRoutes = require('./routes/UsuarioRoutes')

app.use('/central', CentralRoutes)
app.use('/cliente', ClienteRoutes)
app.use('/usuario', UsuarioRoutes)

app.use('/', (req, res) => {
    res.status(200).json({mensagem: 'Sucesso'})
})

conexao.sync({force: true}).then(app.listen(port)).catch((err) => console.log(err))