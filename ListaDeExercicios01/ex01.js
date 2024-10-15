
//exercício 01
const prompt = require('prompt-sync')()

let num1 = Number(prompt("Insira um numero: "))

if(num1 % 2 === 0){
    console.log("O numero é par! ")
} 
else{
    console.log("O numero é ímpar! ")
}
