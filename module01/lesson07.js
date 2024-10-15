const prompt = require('prompt-sync')()
// let multiplier = Number(prompt('me informe o numero que voce quer saber a tabuada'))

// for(let counter = 0; counter <=10; counter++){
//     console.log(`${multiplier} * ${counter} = `, multiplier * counter)
// }

// for(let i = 0; i<= 20; i += 2){
//     console.log(i)
// }

// let soma = 0
// for(let i = 1; i <= 100; i++){
//     soma = soma + i
// }
// console.log(soma)

// for(let j = 10; j > 0; j--){
//     console.log(j)
// }

// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// } 

// let i = 1
// let sum = 0
// while(i <= 100){
//     sum += i
//     i++10
// }
// console.log(sum)

// let num1 = Number(prompt("insira o primeiro numero "))
// let counter = 0
// let sum = 0

//     while(num1 !== 0){
//     sum += num1 
//     counter++
//     num1 = Number(prompt("insira outro numero "))
//     }

// console.log('a media aritimética é: ', sum/counter)

// let num1

// do {
//     num1 = Number(prompt("insira um numero "))
// } while(num1 >= 0)

// let counter = 100
// for(let i = 0; i < 100; i++){
//     if((counter % counter === 0) && (counter % 1 === 0) && counter % 2 != 0 && counter % 3 != 0 && counter % 5 != 0){
//     console.log(counter)
//     }
//     counter++
// }
    

let count = 0
let num = 101

do {
    let primo = 0
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            primo++
        }
    }

    if(primo ===2){
        console.log(num)
        count++
    }

    num++
} while(count < 50)


    