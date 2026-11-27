const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Partida = require('../modelo/partidaClass.js')

class PartidaDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = PartidaDAO