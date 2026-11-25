const ConexaoBanco = require('../ConexaoBanco');

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
            nasc 
        );
    `);

    console.log('Tabela INSCRIÇÃO criada!');
    await db.close();
}

tabelaInscricao();