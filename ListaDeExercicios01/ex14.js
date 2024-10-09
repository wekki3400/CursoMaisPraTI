// exercicio 14

const prompt = require('prompt-sync')()

let num = Number(prompt('Informe um número: '))
let soma = num
let i = num
let j = 1

while(i > 1){
    soma = soma * (num - j)
    i--
    j++
}
console.log(soma)