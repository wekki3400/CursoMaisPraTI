// const professor = {
//     name: 'Tony Stark',
//     subject: 'Physics',
//     grades: {
//         aluno1: 10.0,
//         aluno2: 6.0,
//         aluno3: 1.0,
//         aluno4: 9.0
//     }
// }
//  let sumGrades = 0
//  let numberOfStudents = 0

// for(let aluno in professor.grades){
//    sumGrades += professor.grades[aluno]
//    numberOfStudents++
// }

//  let avarege = sumGrades / numberOfStudents

// if(avarege >= 6){
//     console.log(
//         `Com a média ${avarege}, os alunos do professor ${professor.name} estão acima da média de aprovação na disciplina de ${professor.subject}`
//     )
// }else{
//     console.log(
//         `Com a média ${avarege}, os alunos do professor ${professor.name} estão abaixo da média de aprovação na disciplina de ${professor.subject}`
//     )
// }


// const biblioteca = [
//     {title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
//     {title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
//     {title: "Nárnia", author: "C. S. Lewis", year: 2010}
// ]

// for(let livro of biblioteca){
//     if(livro.year < 2000){
//         console.log(`O livro ${livro.title}, escrito por ${livro.author}, foi publicado em ${livro.year}`)
//     }
// }

const filmes = [
    {title: "Vingadores", genre: "Heróis"},
    {title: "Jumanji", genre: "Aventura"},
    {title: "Deadpool & Wolverine", genre: "Heróis"},
    {title: "Star Wars", genre: "Sci-fi"},
    {title: "Tropa de Elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
]

let genreCount = {}
filmes.forEach(filme => {
    if(genreCount[filme.genre]){
        genreCount[filme.genre]++
    } else {
        genreCount[filme.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do genero ${genre}`)
}
