//exercício 02 
const prompt = require('prompt-sync')()

let age = Number(prompt("Insira a idade: "))

if(age > 0 && age <= 13){
    console.log("É criança ")
}
else if(age >= 14 && age <= 18){
    console.log("É adolescente ")
}
else if(age >= 19 && age <= 59){
    console.log("É adulto ")
}else{
    console.log("É idoso ")
}
