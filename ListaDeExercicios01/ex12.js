// exercicio 12

const prompt = require('prompt-sync')()

let num = Number(prompt('Insira o número para a tabuada: '))
let tabuada 
for(i = 0; i <= 10; i++){
    tabuada = num * i
    console.log(tabuada)
}