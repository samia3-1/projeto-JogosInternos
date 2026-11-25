const ConexaoBanco = require('../ConexaoBanco');

async function tabelaEquipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_treinador REFERENCES treinador(id_usuario),
            nome TEXT NOT NULL
        );
    `);

    console.log('Tabela treinador criada!');
    await db.close();
}

tabelaEquipe();