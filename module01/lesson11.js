//função anonima 
// let teste = function () {
//     console.log('Olá, mundo')
// }

// teste()

// function showFunction(sucessCallback, errorCallback) {
//     if(true){
//         sucessCallback('Requisição bem sucedida')
//     } else {
//         errorCallback('Erro na requisição')
//     }

// }

// let sucessCallback = function(message){
//     console.log(message)
// }

// let errorCallback = function(message){
//     console.error(message)
// }

// showFunction(sucessCallback, errorCallback)

//1. soma dos elementos de um array

// let nums = [10, 20, 30, 40]

// function somaArr(Arr){
//     let sum = 0
//     let length = Arr.length

//     for(let i = 0; i < length; i++){
//        sum += Arr[i]
//     }

//     return sum
// }

// let sum = somaArr(nums)
// console.log(sum)

// 2. encontre o maior numero de um array

// let nums = [10, 20, 30, 40, 35, 67, 65]

// function findMax(Arr){
//     let counter = Arr[0] 
//     let length = Arr.length

//     for(let i = 0; i < length; i++){
//         if(counter < Arr[i]){
//             counter = Arr[i]
//         }
//     }
//     return counter
// }

// let maiorNumero = findMax(nums)
// console.log(maiorNumero)

// 3. reverter um array

// let nums = [10, 20, 30, 40]

// function reverseArr(Arr){
//     let counter = Arr[0] 
//     let length = Arr.length
//     let reverse = Array()   
//     let j = 1

//     for(let i = 0; i < length; i++){
//         reverse.push(Arr[length - j])
//         j++
//     }  
//     return reverse
// }

// let revertido = reverseArr(nums)
// console.log(revertido)

// 4. crie um novo array contendo so os numeros pares 

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// function arrPares(Arr){
//     let length = nums.length
//     let pares = []

//     for(let i = 0; i < length; i++){
//             if(Arr[i] % 2 === 0){
//             pares.push(Arr[i])
//         }
//     }
//     return pares
// }

// let pares = arrPares(nums)
// console.log(pares)

// 5. quantidade de vezes que aparece no vetor 

// const prompt = require('prompt-sync')()

// let nums = [10, 10, 7, 5, 2, 3, 10]
// let value = Number(prompt('insira o valor a ser pesquisado: '))

// function ocorrenciasVetor(value, nums){
//     let length = nums.length
//     let counter = 0

//     for(let i = 0; i < length; i++){
//         if(nums[i] === value){
//             counter++
//         }
//     }
//     return counter
// }
// let contarOcorrencias = ocorrenciasVetor(value, nums)
// console.log(`o valor ${value} ocorre ${contarOcorrencias} vezes no vetor`)
// console.log(contarOcorrencias)

// let nome = ' Equipe Olímpica '

// console.log("Miguel".length)
// console.log("Miguel".charAt(0))
// console.log(nome.indexOf('i'))

//console.log(nome.replace('Miguel', 'Kobus'))

// console.log(nome.substr(7, 8))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim() + '-')

// Matematicos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73))
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100.20))
// console.log(Math.random() * 100)

//Datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())


// console.log(date.toString())
// //console.log(date.getDate() + 100)
// date.setDate(date.getDate() + 100)
// console.log(date.toString())
// date.setFullYear(date.getFullYear() + 2)
// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milisseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(milisseconds_between_dates)

// let milisseconds_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia tem ${milisseconds_per_day} milisigundos`)

// console.log(`a diferenca entre as datas é ${Math.ceil(milisseconds_between_dates/milisseconds_per_day)} dias`)


//dias entre duas datas
// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// function diasEntreDatas(date1, date2){
//     let milisseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
//     let milisseconds_per_day = (1 * 24 * 60 * 60 * 1000)
//     let diferencaDias = Math.ceil(milisseconds_between_dates/milisseconds_per_day)
//     return diferencaDias
// }
// let dias = diasEntreDatas(date1, date2)
// console.log(`A diferença é de ${dias} dias`)

//contar vogais
// let nome = 'Miguel'//['M', 'i', 'g', 'u', 'e', 'l']
// function vogais(arr){
//     let counter = 0
//     let length = arr.length
//     for(let i = 0; i < length; i++){
//         if(arr[i] === 'A' || arr[i] === 'a'){
//             counter++
//         }else if(arr[i] === 'E' || arr[i] === 'e'){
//             counter++
//         }else if(arr[i] === 'I' || arr[i] ==='i'){
//             counter++
//         }else if(arr[i] === 'O' || arr[i] === 'o'){
//             counter++
//         }else if(arr[i] === 'U' || arr[i] ==='u'){
//             counter++
//         } 
//     }
//     return counter
// }

// console.log(vogais(nome))

//gerar numero aleatorio

// function random(){
//     num = Math.random() * 10
//     return num
// }
// console.log(random())

//inverter strings
// const prompt = require('prompt-sync')()
// let str = String(prompt("Insira a sring que quer inverter: "))

// function reverseStr(Arr){
//     let length = Arr.length
//     let reverse = Array()   
//     let j = 1

//     for(let i = 0; i < length; i++){
//         reverse.push(Arr[length - j])
//         j++
//     }  
//     return reverse
// }

// let revertido = reverseStr(str)
// console.log(revertido)

// formatar datas
function dataFormat(){
    let date = new Date()
    let dia = date.getDate()
    let mes = date.getMonth() + 1
    let ano = date.getFullYear()

    let dataF = `${dia}/${mes}/${ano}`
    return dataF
}
dataFormat()
console.log(dataF)