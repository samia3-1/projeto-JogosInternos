const ConexaoBanco = require('../ConexaoBanco');

async function tabelaPartida() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS partida (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_modal INTEGER NOT NULL,
            horario TEXT NOT NULL,
            local TEXT NOT NULL,
            status TEXT NOT NULL,
            pontosA INTEGER NOT NULL DEFAULT 0,
            pontosB INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (id_modal) REFERENCES modalidade(id)
        );
    `);

    console.log('Tabela partida criada!');
    await db.close();
}

tabelaPartida();