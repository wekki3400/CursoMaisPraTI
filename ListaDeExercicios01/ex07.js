// exercicio 07

const prompt = require('prompt-sync')()

let qntComprada = Number(prompt('Quantas maçãs compradas? '))

if(qntComprada < 12){
    let preco = 0.30
    console.log(qntComprada * preco)
}else if (qntComprada >= 12){
    let preco = 0.25
    console.log(qntComprada * preco)
}