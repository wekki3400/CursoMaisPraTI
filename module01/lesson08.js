const prompt = require('prompt-sync')()

//exercicio 1

// const num1 = Number(prompt("digite um numero "))

// if(num1 > 0){
//     console.log("numero e positivo")
// }else if(num1 < 0){
//     console.log("numero e negativo")
// }else{
//     console.log("o numero é 0")
// }


//exercicio 2

// const year = Number(prompt("informe um ano "))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`o ano ${year} é bissexto `)
// } else {
//     console.log(`${year} não é bissexto `)
// }


//exercicio 3 

// let grade1 = Number(prompt("informe a primeira nota "))
// let grade2 = Number(prompt("informe a segunda nota "))
// let grade3 = Number(prompt("informe a terceira nota "))

// let avg = (grade1 + grade2 + grade3)/3
// let concept

// if(avg >= 90){
//     console.log(`a média das notas é ${avg.toFixed(2)}`)
//     concept = 'A'
// }else if(avg >= 80){
//     console.log(`a média das notas é ${avg.toFixed(2)}`)
//     concept = 'B'
// }else{
//     console.log("é outra nota")
// }

// console.log('o conceito do aluno é: ' + concept)

// exercicio 9 

// let age = Number(prompt("Informe a sua idade "))
// let ageRenge

// if(age >= 0 && age <= 12){
//     ageRenge = 'crianca'
// } else if(age >= 13 && age <= 17){
//     ageRenge = 'adolescente'
// } else if(age >= 18 && age <= 60){
//     ageRenge = 'adulto'
// }else{ 
//     ageRenge = 'idade invalida'
// }

// switch(ageRenge){
//     case 'crianca':
//         console.log('voce e uma crianca')
//         break
//     case 'adolescente':
//         console.log('voce e um adolescente')
//         break
//     case 'adulto':
//         console.log('voce e umm adulto')
//         break
//     default:
//         console.log('idade invalida')
//         break
// }

// exercicio 10

let num1 = 98//Number(prompt("insira o primeiro valor: "))
let num2 = 56//Number(prompt("insira o segundo valuor: "))

let a = num1
let b = num2

do {

    let temp = b
    b = a % b
    a = temp
}while(b !== 0)

const MDC = a

console.log(`o maior divisor comum de ${num1} e ${num2} é ${MDC}`)

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['Hyago'] = '10'

let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Aneir', 'O Hobbit', 'Harry Potter']

//livros.push('Sherlock Holmes')
//livros.unshift('1984')
//livros.pop()
//livros.shift() 
//livros.splice(2 )
console.log(livros)