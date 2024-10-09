let produto = {
    preco: 200,
    custoFabricacao: 50,
    lucro: 150,
    tempoDeFabricacao: 30,
}

for(let key in produto){
    if(produto[key] > 60){
        const prod =novosProdutos(produto,key)
        console.log(prod)

    }
}

function novosProdutos(produto,key){

    let novoProduto={}
    novoProduto[key]=produto[key]
    return novoProduto;
}