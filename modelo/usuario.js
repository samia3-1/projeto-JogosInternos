const ConexaoBanco = require('../ConexaoBanco');

async function tabelaUsuario() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            cpf TEXT PRIMARY KEY,
            nome TEXT NOT NULL
        );
    `);

    console.log('Tabela usuarios criada!');
}

tabelaUsuario();