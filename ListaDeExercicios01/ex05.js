// exercicio 05

const prompt = require('prompt-sync')()

let peso = Number(prompt('Insira o peso (em kg): '))
let altura = Number(prompt('Insira a altura (em metros ex: 1.80): '))

let IMC = peso / (altura * altura)

if(IMC <= 16.9){
    console.log('Muito abaixo do peso')
}else if(IMC >= 17 &&  IMC <= 18.4){
    console.log('Abaixo do peso')
}else if(IMC >= 18.5 &&  IMC <= 24.9){
    console.log('Peso normal')
}else if(IMC >= 25 &&  IMC <= 29.9){
    console.log('Acima do peso')
}else if(IMC >= 30 &&  IMC <= 34.9){
    console.log('Obesidade grau I')
}else if(IMC >= 35 &&  IMC <= 40){
    console.log('Obesidade grau II')
}else if(IMC > 40){
    console.log('Obesidade grau III')
}
console.log(IMC)