const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Atleta = require('../modelo/atletaClass.js')

class AtletaDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = AtletaDAO