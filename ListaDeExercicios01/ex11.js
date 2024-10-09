// exercicio 11

const prompt = require('prompt-sync')()

let soma = 0
let num 

for(let i = 1; i < 6; i++){
    num = Number(prompt(`Insira o ${i} número: `))
    soma = num + soma
}
console.log(soma)


