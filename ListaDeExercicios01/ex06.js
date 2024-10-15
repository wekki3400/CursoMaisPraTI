// exercicio 06

const prompt = require('prompt-sync')()

let A = Number(prompt('Insira o primeiro  : '))
let B = Number(prompt('Insira o segundo  : '))
let C = Number(prompt('Insira o terceiro  : '))

if(A < B + C && B < A + C && C < A + B){
    if(A == B && B == C){
        console.log('Triângulo equilatero')
    }else if(A == B || A == C || B == C){
        console.log('Triângulo isósceles')
    }else if(A != B && A != C && B != C){
        console.log('Triângulo escaleno')
    }
}else{
    console.log('Não é um triangulo')
}