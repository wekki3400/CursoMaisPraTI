let alunos = [
    {nome: "Miguel", nota1: 10, nota2: 9},
    {nome: "Laura", nota1: 10, nota2: 10},
    {nome: "Emma", nota1: 8, nota2: 7},
    {nome: "Caio", nota1: 8, nota2: 8},
    {nome: "Gabriel", nota1: 10, nota2: 10},
]

for(let media of alunos){
    let avg =  (media.nota1 + media.nota2) / 2
    console.log(`O aluno ${media.nome} tem média ${avg}`)
}