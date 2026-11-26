const ConexaoBanco = require('../ConexaoBanco');

async function tabelaPartidaEquipe() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS partida_equipe (
            id_partida INTEGER NOT NULL,
            id_equipe INTEGER NOT NULL,
            PRIMARY KEY (id_partida, id_equipe),
            FOREIGN KEY (id_partida) REFERENCES partida(id),
            FOREIGN KEY (id_equipe) REFERENCES equipe(id)
        );
    `);

    console.log('Tabela partida_equipe criada!');
    await db.close();
}

tabelaPartidaEquipe();