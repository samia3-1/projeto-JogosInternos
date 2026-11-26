const ConexaoBanco = require('../ConexaoBanco');

async function tabelaEquipeModal() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe (
            id_modal INTEGER PRIMARY KEY REFERENCES modalidade(id),
            id_equipe INTEGER PRIMARY KEY REFERENCES equipe(id)
        );
    `);

    console.log('Tabela equipeModal criada!');
    await db.close();
}

tabelaEquipeModal();