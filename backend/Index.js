const express = require('express')
const cors = require('cors')
const port = 5000 

const app = express()

const conexao = require('./models/Conexao')

app.use(express.json)

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

conexao.sync().then(app.listen(port)).catch((err) => console.log(err))