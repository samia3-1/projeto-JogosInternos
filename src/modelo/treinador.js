const ConexaoBanco = require('../../ConexaoBanco');

async function tabelaTreinador() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS treinador (
            id INTEGER PRIMARY KEY FOREIGH KEY,
            FOREIGH KEY(id_usuarios) REFERENCES usuarios(id)
        );
    `);

    console.log('Tabela TREINADOR criada!');
    await db.close();
}

tabelaTreinador();