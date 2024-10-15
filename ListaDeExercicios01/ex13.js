// exercicio 13

const prompt = require('prompt-sync')()
let num
let counter = 0
let soma = 0
let media

do {
    num = Number(prompt('Insira um numero (0 para sair): '))
    soma = soma + num
    counter++ 
}while(num != 0) 

media = soma / (counter - 1)
console.log(media)