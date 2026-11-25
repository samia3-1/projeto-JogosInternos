const ConexaoBanco = require('../ConexaoBanco');

async function tabelaAdm() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS adm (
            id_usuario INTEGER PRIMARY KEY REFERENCES usuarios(id)
        );
    `);

    console.log('Tabela adm criada!');
    await db.close();
}

tabelaAdm();