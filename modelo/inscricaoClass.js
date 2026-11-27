class Inscricao{
    id
    esporte
    nasc
    id_atleta
    id_turma
    id_equipe
    constructor(id, esporte, nasc, id_atleta, id_turma, id_equipe){
        this.id = id
        this.esporte = esporte
        this.nasc = nasc
        this.id_atleta = id_atleta
        this.id_turma = id_turma
        this.id_equipe = id_equipe
    }
}

module.exports = Inscricao