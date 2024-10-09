let produtos = [
    {nome: "Quadro", preco: 150},
    {nome: "Mesa", preco: 300},
    {nome: "Cadeira", preco: 230},
    {nome: "Armário", preco: 340},
    {nome: "Gavetas", preco: 100},
]

produtos.forEach(produto => {
    let dezPorCento = (produto.preco/100) * 10
    produto.preco = produto.preco - dezPorCento
    console.log(`o item ${produto.nome} tem o preco de ${produto.preco} após 10% de desconto`)
})

