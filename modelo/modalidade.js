const ConexaoBanco = require('../ConexaoBanco');

async function tabelaModalidade() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS modalidade (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            local TEXT NOT NULL,
            gen TEXT NOT NULL CHECK (gen IN ('feminino', 'masculino', 'misto')),
            tipo TEXT NOT NULL CHECK (tipo IN ('individual', 'coletivo')),
            min INTEGER NOT NULL,
            max INTEGER NOT NULL
        );
    `);

    console.log('Tabela modalidade criada!');
    await db.close();
}

tabelaModalidade();