const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Inscricao = require('../modelo/inscricaoClass.js')

class InscricaoDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = InscricaoDAO