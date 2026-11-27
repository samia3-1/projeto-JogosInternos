const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Adm = require('../modelo/admClass.js')

class AdmDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = AdmDAO