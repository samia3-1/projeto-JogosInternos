const ConexaoBanco = require('../ConexaoBanco');

async function tabelaTurma() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS turma (
            nome TEXT NOT NULL,
            serie TEXT NOT NULL,
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            classif TEXT
        );
    `);

    console.log('Tabela turma criada!');
    await db.close();
}

tabelaTurma();