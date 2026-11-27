const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Treinador = require('../modelo/treinadorClass.js')

class TreinadorDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = TreinadorDAO