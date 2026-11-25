const ConexaoBanco = require('../ConexaoBanco');

async function tabelaModal() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS modalidade (
            nome TEXT NOT NULL,
            local TEXT NOT NULL,
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            gen TEXT NOT NULL CHECK (gen IN ('feminino', 'masculino', 'misto')),
            tipo TEXT NOT NULL CHECK (tipo IN ('individual', 'coletivo')),
            min TEXT NOT NULL,
            max TEXT NOT NULL
        );
    `);

    console.log('Tabela modalidade criada!');
    await db.close();
}

tabelaModal();