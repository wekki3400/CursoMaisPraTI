//teclado
//branco, tem rgb, teclas personalizadas, 
//ligado 

let serie = {
    nome: "The Boys",
    genero: ["Ação", "Paródia", "Heróis"],
    nrTemporadas: 4,
    status: "Em andamento",
    cassificacao: 18,
    nrEpisodios: {
        temp1: 10, 
        tenp2: 10,
        temp3: 50 
    },

    mostrarCaracteristicas: function() {
        return ("O nome da série é: " + this.nome + " e sua classificação é + " + this.cassificacao)
    }
    
}

// console.log(serie.mostrarCaracteristicas())

// function teste(obj){
//     console.log(obj)
// }

// // teste(serie)

let livro = {
    titulo: "Percy Jackson o ladrão de raios",
    estado: "fechado",
    numeroDePaginas: 250,
    capa: "brochura",
    imagens: "Não possui imagens",
    autor: "Rick Riordan",
    seriePertencente: "Percy Jackson e os olimpianos",
    ano: 2005,
    editora: "intrínseca",
    mostrarCaracteristicas: function(){
        return `${this.titulo} foi escrito por ${this.autor} e possui ${this.numeroDePaginas} páginas`
    },

    mostrarSinopse: function(){
        return "Voce irá para o oeste, e irá enfrentar o deus que se tornou desleal. Irá encontrar o que foi roubado e o verá devolvido em segurança. Será traido por aquele que o chama de amigo. E, no fim, irá fracassar em salvar aquino que mais importa."
    }
}
// console.log(livro.mostrarCaracteristicas())
// console.log(livro.mostrarSinopse())


let carro = {
    marca: "ford mustang",
    modelo: "Mustang",
    portas: "Duas",
    cavalosHP: 483,
    ano: 2022,
    mostrarCaracteristicas: function(){
        return `O carro '${this.modelo}' da marca ${this.marca} possúi ${this.portas} portas e ${483} HP `
    },

    acelerar: function(){
        return "acelerando com o pé no porão"
    }
}
//console.log(carro.mostrarCaracteristicas())
//console.log(carro.acelerar())

let motor = "1000"
let nome = "BMW s1000rr"
let tipo = "esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor
}

//console.log(moto)

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate Street",
    idade: 16   
}

atleta.nacionalidade = "Brasil"
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}

atleta.celebrarVitoria = () => {return("GANHEI!!!")}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissao: "Batman"
}

let obj2 = obj1

obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

//funcao construtora
function computador(processador, gpu, ram, armazenamento){
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function() {
        console.log(`o ${processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function(){
        return(`
            processador: ${this.processador}
            gps: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`)
    }
}

let pc = new computador("i9", "RTX4090", "16GB", "2TB")
let pc2 = new computador("i7", "RTX3090", "16GB", "2TB")
//console.log(pc.mostrarEspecificacoes())

//pc2.ligar()

//funcao fabrica
function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return{
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}
let jogo1 =  jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => {return 'jogando'})

// console.log(jogo1)
// console.log(jogo1.jogar())

//for in, for of, for each


// let carro2 = {
//     modelo: "Buggati",
//     ano: 2010,
//     cor: "laranja"
// }

//chave e valor
// for(let key in jogo1){
//     console.log(`${key}: ${jogo1[key]}`)
// }

const jogadores = [['Pelé', 'Romário'], 'CR7', 'Messi']

for(let key in jogadores){
    //console.log(jogadores[key])
    //console.log(key)
}


const NOME = 'silva'
for(let char of NOME){
   // console.log(char)
}

//acessa a posicao em si 
for(let jogador of jogadores){
    //console.log(jogador)
}

for(let jogo of Object.keys(jogo1)){
    //console.log(jogo1[jogo])
}

for(let key in serie){
   // console.log(serie, serie[key])
}

for(let key in carro){
    //console.log(carro, carro[key])
}

for(let key in livro){
    //console.log(livro, livro[key])
}

let items = [['banana', 'maça', 'pera', 'manga'], ['leite Em Pó', 'nescau', 'toddy'], ['arroz', 'feijao', 'lentilha']]

for(let arr of items){
   // console.log(arr)
}
