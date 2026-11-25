const ConexaoBanco = require('../ConexaoBanco');

async function tabelaPartidaEquipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe (
            id_partida INTEGER PRIMARY KEY REFERENCES partida(id),
            id_equipe INTEGER PRIMARY KEY REFERENCES equipe(id)
        );
    `);

    console.log('Tabela partidaEquipe criada!');
    await db.close();
}

tabelaPartidaEquipe();