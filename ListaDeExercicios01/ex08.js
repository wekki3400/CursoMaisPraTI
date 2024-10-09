// exercicio 08

const prompt = require('prompt-sync')()

let A = Number(prompt('Primeiro valor: '))
let B = Number(prompt('Segundo valor: '))

if(A == B){
    console.log('Os números precisam ser diferentes')
}else if(A > B){
    console.log(A, B)
}else if(B > A){
    console.log(B, A)
}