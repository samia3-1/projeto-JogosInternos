const ConexaoBanco = require('../ConexaoBanco');

async function tabelaPartida_Equipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Partida_Equipe (
            id_partida PRIMARY KEY,
            id_equipe PRIMARY KEY,
        );
    `);

    console.log('Tabela PARTIDA_EQUIPE criada!');
    await db.close();
}

tabelaPartida_Equipe();