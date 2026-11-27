Vendo exemplos de como criar um DAO e explicaçâo sobre sua estrutura 26/11

async buscarPorID(id) {
    const db = await this.conexaoBanco()          // 1. abre
    try {
        const linha = await db.get('SELECT * FROM usuario WHERE id = ?', id)  // 2. executa
        if (!linha) return null
        return new Usuario(linha.nome, linha.email, linha.id)  // 3. traduz para objeto
    } finally {
        await db.close()                          // 3. fecha
    }
}
