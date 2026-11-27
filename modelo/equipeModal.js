const ConexaoBanco = require('../ConexaoBanco');

async function tabelaEquipeModal() {
    const conexao = new ConexaoBanco();
    const db = await conexao.conexaoBanco();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS equipe_modal (
            id_modal INTEGER NOT NULL,
            id_equipe INTEGER NOT NULL,
            PRIMARY KEY (id_modal, id_equipe),
            FOREIGN KEY (id_modal) REFERENCES modalidade(id),
            FOREIGN KEY (id_equipe) REFERENCES equipe(id)
        );
    `);

    console.log('Tabela equipeModal criada!');
    await db.close();
}

tabelaEquipeModal();