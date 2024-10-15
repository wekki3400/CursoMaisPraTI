// let thingstList = []

// thingstList['hardware'] = []
// thingstList['fruits'] = []
// thingstList['people'] = ['aristoteles', 'tolkien']

// thingstList['hardware'][0] = 'notebook'
// thingstList['hardware'][1] = 'mouse'
// thingstList['hardware'][2] = 'teclado'
// thingstList['fruits'][0] = 'laranja'
// thingstList['fruits'][1] = 'maça'

// console.table(thingstList['hardware'])
// console.table(thingstList)

// let fruitList = []

// fruitList[0] = 'Maça'
// fruitList[1] = 'Banana'
// fruitList[2] = 'Melancia'
// fruitList[3] = 'Uva'
// fruitList[4] = 'Morango'

// let index = fruitList.indexOf('Morango')

// if(index === -1){
//     console.log('O elemento não existe')
// }else{
//     console.log(`O elemento existe e esta na posição ${index}`)
// }

// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))

// function calculateLandArea(width, height) {
//     let area = width * height
//     return area
// }

// let width = 50
// let height = 100

// let area = calculateLandArea(width, height)

// console.log(`A area possui ${area} metros quadrados`)


let fruitList = []

fruitList[0] = 'Maça'
fruitList[1] = 'Banana'
fruitList[2] = 'Melancia'
fruitList[3] = 'Uva'
fruitList[4] = 'Morango'

function arrAlfabetico(arr){
    arr.sort()
    return arr
}

let arrOrdenado = arrAlfabetico(fruitList)

console.log(arrOrdenado)
