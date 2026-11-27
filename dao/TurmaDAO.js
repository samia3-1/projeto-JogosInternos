const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Turma = require('../modelo/turmaClass.js')

class TurmaDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = TurmaDAO