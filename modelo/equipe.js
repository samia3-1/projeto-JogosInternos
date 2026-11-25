const ConexaoBanco = require('../ConexaoBanco');

async function tabelaEquipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            id_treinador INTEGER,
            FOREIGH KEY(id_treinador) REFERENCES treinador(id),
        );
    `);

    console.log('Tabela EQUIPE criada!');
    await db.close();
}

tabelaEquipe();