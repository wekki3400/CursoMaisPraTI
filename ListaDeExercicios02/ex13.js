let carrinho = {
    items: [
        {nome: "teclado", quantidade: 13, precoUnitario: 250},
        {nome: "mouse", quantidade: 16, precoUnitario: 190},
        {nome: "monitor", quantidade: 4, precoUnitario: 900},
        {nome: "headset", quantidade: 9, precoUnitario: 400},
        {nome: "microfone", quantidade: 7, precoUnitario: 300},
    ]
}

let valorTotal = 0
carrinho.items.forEach(valor => {
    valorTotal += valor.quantidade * valor.precoUnitario
})
console.log(valorTotal)