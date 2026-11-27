class Modalidade{
    id
    nome
    local
    gen
    tipo
    min 
    max
    constructor(id, nome, local, gen, tipo, min, max){
        this.id = id
        this.nome = nome
        this.local = local
        this.gen = gen
        this.tipo = tipo
        this.min = min
        this.max = max
    }
}

module.exports = Modalidade