const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const Modal = require('../modelo/modalClass.js')

class ModalDAO {
    async ConexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        })
        return db
    }
}

module.exports = ModalDAO