pessoas = [
    {nome: "Carlos", idade: 34, cidade: "Florianópolis"},
    {nome: "Amanda", idade: 17, cidade: "Brasília"},
    {nome: "Kaue", idade: 16, cidade: "Curitiba"},
    {nome: "Pablo", idade: 47, cidade: "São Paulo"},
    {nome: "Gabriela", idade: 22, cidade: "Florianópolis"},
]                  

for(let pessoa of pessoas){
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`)
}