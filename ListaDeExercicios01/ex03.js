// exercício 03
const prompt = require('prompt-sync')()

let nota 
do {
    nota = Number(prompt("Insira a nota: "))
} while(nota > 10 || nota < 0)

    if(nota >= 0 && nota <= 4){
        console.log("reprovado")
    }else if(nota >= 5 && nota <= 6){
        console.log("recuperação")
    }else{
        console.log("aprovado")
    }