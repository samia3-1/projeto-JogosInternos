const ConexaoBanco = require('../../ConexaoBanco');

async function tabelaInscricao() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS inscricao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_atleta NOT NULL,
            id_turma NOT NULL,
            esporte TEXT,
            equipe TEXT,
            nasc TEXT NOT NULL,
            FOREIGH KEY(id_atleta) REFERENCES atleta(id),
            FOREIGH KEY(id_turma) REFERENCES turma(id),
        );
    `);

    console.log('Tabela INSCRIÇÃO criada!');
    await db.close();
}

tabelaInscricao();