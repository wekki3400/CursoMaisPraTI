let estoque = [
    {produto: "Teclado", quantidade: 3, minimo: 10},
    {produto: "Monitor", quantidade: 6, minimo: 5},
    {produto: "Mouse", quantidade: 10, minimo: 15},
    {produto: "Headset", quantidade: 5, minimo: 10},
    {produto: "MousePad", quantidade: 7, minimo: 6},
]

estoque.forEach(produto => {
    if(produto.quantidade < produto.minimo){
        while (produto.quantidade < produto.minimo){
            produto.quantidade = produto.quantidade * 2
        }
    }
})

for(let produto of estoque){
    console.log(`Existem ${produto.quantidade} unidades de ${produto.produto} em estoque e o minímo é ${produto.minimo}`)
}