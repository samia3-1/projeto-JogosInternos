const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Usuario = require('../modelo/usuarioClass.js')

class UsuarioDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = UsuarioDAO

