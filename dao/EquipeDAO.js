const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Equipe = require('../modelo/equipeClass.js')

class EquipeDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = EquipeDAO