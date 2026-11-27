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

    async inserirUsuario(usuario){
        let { nome, cpf } = usuario
        const banco = await this.ConexaoBanco()
        await banco.run('INSERT INTO usuario(nome, cpf) VALUES (?, ?)', nome, cpf)
    }

    async atualizar(usuario){
        let { nome, cpf } = usuario
        const banco = await this.ConexaoBanco()
        await banco.run('UPDATE usuario SET nome = ? WHERE cpf = ?', cpf)
    }
}



module.exports = UsuarioDAO

