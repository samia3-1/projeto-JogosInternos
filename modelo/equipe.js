const ConexaoBanco = require('../ConexaoBanco');

async function tabelaEquipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_treinador INTEGER NOT NULL,
            nome TEXT NOT NULL,
            FOREIGN KEY (id_treinador) REFERENCES treinador(id_usuario)
        );
    `);

    console.log('Tabela equipe criada!');
    await db.close();
}

tabelaEquipe();