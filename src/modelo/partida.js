const ConexaoBanco = require('../../ConexaoBanco');

async function tabelaPartida() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS partida (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            horario TEXT NOT NULL,
            local TEXT NOT NULL,
            status TEXT,
            pontos NUMBER,
            classif TEXT
        );
    `);

    console.log('Tabela PARTIDA criada!');
    await db.close();
}

tabelaPartida();