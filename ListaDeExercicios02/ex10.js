let vendas = [
    {produto: "Teclado", quantidade: 11, valor: 240},
    {produto: "Mouse", quantidade: 15, valor: 190},
    {produto: "Headser", quantidade: 8, valor: 300},
    {produto: "Monitor", quantidade: 3, valor: 900},
]

let valorTotal = 0
vendas.forEach(produto => {
    valorTotal = valorTotal + (produto.valor * produto.quantidade)
})
console.log(valorTotal)