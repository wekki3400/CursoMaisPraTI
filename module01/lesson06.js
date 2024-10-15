//operadores relacionais 
// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != '10')
// console.log(10 !== '10')

//operadores logicos

// console.log((10 < 5) && (10 > 2))
// console.log((10 > 5) || (10 < 2))
// console.log((10 > 5) || !(10 < 2))
// console.log(!(10 > 5) || (10 < 2))

// let usuario = "Miguel"
// let senha = "gerakao17"

// let autenticacao = usuario === "Miguel" && senha === "gerakao17"

// console.log(autenticacao)

// const grade = 60

// if(grade >= 60){
//     console.log("aprovado")
// } else {
//     console.log("reprovado")
// }

// const idade = 20

// if((idade >= 18) && (idade <= 32)){
//     console.log("pode realizar o concurso")
// } else {
//     console.log("nao pode realizar o concurso")
// }

// <condicao> ? <verdadeiro> : <falso>
// let ternaryResult = (10 < 100) ? "verdadeiro" : "falso"
// console.log(ternaryResult)

// let number = 10

// number = number % 2
// if(number == 0){
//     console.log("par")
// } else {
//     console.log("impar")
// }

// let a = 6
// let b = 5 
// let c = 7

// if(a > b && a > c){
//     console.log('primeiro valor e maior')
// }else if(b > a && b > c){
//     console.log('segundo valor e maior')
// }else if(c > a && c > b){
//     console.log('terceiro valor e maior')
// }

// let x = 10
// let z = 2
// let calc = 1

// if(calc === 1){
//     console.log(x + z)
// } else if(calc === 2){
//     console.log(x - z)
// } else if(calc === 3){
//     console.log(x * z)
// } else if(calc === 4){
//     console.log(x/+ zcd)
// }

const prompt = require('prompt-sync')()

// let num1 = Number(prompt("insira o primeiro valor: "))
// let num2 = Number(prompt("insira o segundo valor: "))
// let operation = (prompt("insira a operacao desejada (+, -, *, /): "))
// let result = 0

// if(operation === '+'){
//     result = num1 + num2
// } else if(operation === '-'){
//     result = num1 - num2
// } else if(operation === '*'){
//     result = num1 * num2
// } else if(operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2
//     } else {
//         console.log("erro divissao por zero.")
//         result = undefined
//     }
    
// } else {
//     console.log("operacao invalida")
//     result = undefined
// }
// if(result !== undefined){
//     console.log("resultado: ", result)
// }

// let option = 1

// switch(option){
//     case 1:
//         console.log("voce selecionou a opcao 1")
//         break
//     case 2:
//         console.log("voce selecionou a opcao 2")
//         break
//     default:
//         console.log("voce nao escolheu nenhuma opcao")
//         break
// }

let num1 = Number(prompt("insira o primeiro valor: "))
let num2 = Number(prompt("insira o segundo valor: "))
let operation = (prompt("insira a operacao desejada (+, -, *, /): "))
let result = 0

switch(operation){
    case "+":
        result = num1 + num2
        break
    case "-":
        result = num1 - num2
        break
    case "*":
        result = num1 * num2
        break
    case "/":
        if(num2 !== 0){ 
        result = num1 / num2
        break
        } else {
            console.log("erro divissao por zero.")
            result = undefined
            break
        }
    default:
        result = undefined
        console.log("opcao invalida")
        break
}
if(result !== undefined){
    console.log("resultado: ", result)
}