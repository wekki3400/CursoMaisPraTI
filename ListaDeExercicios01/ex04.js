// exercício 04
const prompt = require('prompt-sync')()

let option = Number(prompt("Escolha uma opção (1,2 ou 3): "))

switch(option){
    case 1:
        console.log("você selecionou a opção 1")
        break
    case 2:
        console.log("você selecionou a opção 2")
        break
    case 3:
        console.log("você selecionou a opção 3")
        break
    default:
        console.log("você não selecionou nenhuma opção")
        break
}
