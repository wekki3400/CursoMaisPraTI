// exercicio 15

let atual  = 1
let anterior = 0
let fibonacci 

for(let i = 1; i <= 10; i++){
    fibonacci = atual + anterior
    console.log(fibonacci)
    anterior = atual
    atual = fibonacci
}
