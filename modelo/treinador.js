const ConexaoBanco = require('../ConexaoBanco');

async function tabelaTreinador() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS treinador (
            id_usuario INTEGER PRIMARY KEY REFERENCES usuarios(id)
        );
    `);

    console.log('Tabela treinador criada!');
    await db.close();
}

tabelaTreinador();