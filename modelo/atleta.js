const ConexaoBanco = require('../ConexaoBanco');

async function tabelaAtleta() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS atleta (
            id_usuario INTEGER PRIMARY KEY,
            matr TEXT NOT NULL,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id)
        );
    `);

    console.log('Tabela atleta criada!');
    await db.close();
}

tabelaAtleta();