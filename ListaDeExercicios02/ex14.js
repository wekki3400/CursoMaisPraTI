let empresa = {
    departamentos: [
        {nome: "Marketing", funcionarios: ["Miguel", "Emma", "Eduardo"] , },
        {nome: "Vendas", funcionarios: ["Carlos", "Pablo", "Gabriela"] , },
        {nome: "Segurança", funcionarios: ["Amanda", "Nicolas", "Caio"] , },
    ]
}

for(let key of empresa.departamentos){
    for(let chave in empresa.departamentos){
        console.log(`o funcionario ${key.funcionarios[chave]} faz parte do departamento de ${key.nome}`)
    }
}