let clientes = [
    {nome: "Carlos", idade: 34, cidade: "Florianópolis"},
    {nome: "Amanda", idade: 17, cidade: "Brasília"},
    {nome: "Kaue", idade: 16, cidade: "Curitiba"},
    {nome: "Pablo", idade: 47, cidade: "São Paulo"},
    {nome: "Gabriela", idade: 22, cidade: "Florianópolis"},
    {nome: "Antonio", idade: 33, cidade: "Florianópolis"},
]

let clientesComIdadeAcimaDe30 = 0
clientes.forEach(cliente => {
    if(cliente.idade > 30){
        clientesComIdadeAcimaDe30++
    }
})
console.log(clientesComIdadeAcimaDe30)