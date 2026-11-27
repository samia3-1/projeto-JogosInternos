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
    async remover(cpf) {
        const banco = await this.conexaoBanco()
        await banco.run('DELETE FROM usuario WHERE cpf = ?', cpf)
    }

    async buscarPorCPF(cpf) {
        const banco = await this.conexaoBanco()
        const result = await banco.get('SELECT * FROM usuario WHERE cpf = ?', cpf)
        return new Usuario(result.cpf, result.nome)
    }

    async buscarTodos() {
        const banco = await this.conexaoBanco()
        const result = await banco.all('SELECT * FROM usuario')
        let lista = []
        for (let registro of result)
            lista.push(new Usuario(registro.cpf, registro.nome))
        return lista
    }
}


module.exports = UsuarioDAO