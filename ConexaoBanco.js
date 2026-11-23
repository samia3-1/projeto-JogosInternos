const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

class ConexaoBanco {
    async conexaoBanco() {
        const db = await open({
            filename: 'database.db',
            driver: sqlite3.Database
        });

        return db;
    }
}

module.exports = ConexaoBanco;