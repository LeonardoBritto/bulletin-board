const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('painel', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado com Sucesso!')
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize