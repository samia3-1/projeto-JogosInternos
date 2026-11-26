const ConexaoBanco = require('../ConexaoBanco');

async function tabelaAtleta() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS atleta (
            id_usuarios PRIMARY KEY FOREIGH KEY,
            matr TEXT NOT NULL,
            FOREIGH KEY(id_usuarios) REFERENCES usuarios(id)
        );
    `);

    console.log('Tabela ATLETA criada!');
    await db.close();
}

tabelaAtleta();