let funcionarios = [
    {nome: "Miguel", cargo: "Empacotador", salario: 1400},
    {nome: "Carla", cargo: "Fiscal", salario: 2500},
    {nome: "Luciano", cargo: "Operador de caixa", salario: 1900},
    {nome: "Emma", cargo: "Gerente", salario: 6000},
    {nome: "Diogo", cargo: "Sub-gerente", salario: 5000},
    {nome: "Eduardo", cargo: "Gerente regional", salario: 7000},
]

for(let salario of funcionarios){
    if(salario.salario > 2400){
        console.log(`O funcionário ${salario.nome} tem um salário de ${salario.salario}`)
    }
}