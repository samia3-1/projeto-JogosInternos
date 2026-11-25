const ConexaoBanco = require('../../ConexaoBanco');

async function tabelaPartida_Equipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Partida_Equipe (
            id_partida PRIMARY KEY FOREIGH KEY,
            id_equipe PRIMARY KEY FOREIGH KEY,
            FOREIGH KEY(id_partida) REFERENCES partida(id),
            FOREIGH KEY(id_equipe) REFERENCES equipe(id),
        );
    `);

    console.log('Tabela PARTIDA_EQUIPE criada!');
    await db.close();
}

tabelaPartida_Equipe();