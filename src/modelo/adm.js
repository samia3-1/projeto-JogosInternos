const ConexaoBanco = require('../../ConexaoBanco');

async function tabelaAdm() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS adm (
            id_usuarios PRIMARY KEY FOREIGH KEY,
            FOREIGH KEY(id_usuarios) REFERENCES usuarios(id)
        );
    `);

    console.log('Tabela ADM criada!');
    await db.close();
}

tabelaAdm();