// 1. soma dos elementos de um array

//let nums = [10, 20, 30, 40]
// let sum = 0
// let length = nums.length

// for(let i = 0; i < length; i++){
//     sum += nums[i]
// }

// console.log(sum)

// 2. encontre o maior numero de um array

// let nums = [10, 20, 30, 40, 35, 67]
// let counter = nums[0] 
// let length = nums.length

// for(let i = 0; i < length; i++){
//     if(counter < nums[i]){
//         counter = nums[i]
//     }
// }

// console.log(counter)

// 3. reverter um array

// let nums = [10, 20, 30, 40]
// let counter = nums[0] 
// let length = nums.length
// let reverse = Array()
// let j = 1

// for(let i = 0; i < length; i++){
//     reverse.push(nums[length - j])
//     j++
// }
// console.log(reverse)

// 4. crie um novo array contendo so os numeros pares 

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let length = nums.length
// let pares = []

// for(let i = 0; i < length; i++){
//     if(nums[i] % 2 === 0){
//         pares.push(nums[i])
//     }
// }
// console.log(pares)


// const prompt = require('prompt-sync')()
// let nums = [10, 10, 7, 5, 2, 3, 10]
// let length = nums.length
// let value = Number(prompt('insira o valor a ser pesquisado: '))
// let counter = 0

// for(let i = 0; i < length; i++){
//     if(nums[i] === value){
//         counter++
//     }
// }
// console.log(`o valor ${value} ocorre ${counter} vezes no vetor`)

// arrays de arrays /multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let length = matriz.length
// console.table(matriz)
// console.log(matriz[0][2])

// for(let i = 0; i < length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

let matr1 = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
]
let matr2 = [
    [9, 8, 7], 
    [6, 5, 4],
    [3, 2, 1]
]
let sum = 0
let length = matr1.length
let resultado = []

if(matr1.length !== matr2.length || matr1[0].length !== matr2[0].length){
    throw new Error("os arreys devem ter o mesmo tamanho.")
}

for(let i = 0; i < length; i++){
    let somaLinha = []
    for(let j = 0; j < matr1[1].length; j++){
        somaLinha.push(matr1[i][j] + matr2[i][j])
    }

    resultado.push(somaLinha)
}
console.table(resultado)