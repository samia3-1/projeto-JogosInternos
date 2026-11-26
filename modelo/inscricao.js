const ConexaoBanco = require('../ConexaoBanco');

async function tabelaInscricao() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS inscricao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_atleta INTEGER NOT NULL,
            id_turma INTEGER NOT NULL,
            esporte TEXT NOT NULL,
            id_equipe INTEGER,
            nasc TEXT NOT NULL,
            FOREIGN KEY (id_atleta) REFERENCES atleta(id_usuario),
            FOREIGN KEY (id_turma) REFERENCES turma(id),
            FOREIGN KEY (id_equipe) REFERENCES equipe(id)
        );
    `);

    console.log('Tabela inscricao criada!');
    await db.close();
}

tabelaInscricao();