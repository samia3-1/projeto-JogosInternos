const ConexaoBanco = require('../ConexaoBanco');

async function tabelaInscricao() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS inscricao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_atleta REFERENCES atleta(id_usuario),
            idTurma REFERENCES turma(id),
            esporte TEXT NOT NULL,
            id_equipe INTEGER NOT NULL REFERENCES equipe(id),
            nasc TEXT NOT NULL
        );
    `);

    console.log('Tabela inscricao criada!');
    await db.close();
}

tabelaInscricao();