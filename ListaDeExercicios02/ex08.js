filmes = [
    {titulo: "Star Wars o império contra ataca", diretor: "Irvin Kershner", anoLancamento: 1980},
    {titulo: "Vingadores Ultimato", diretor: "Anthony Russo", anoLancamento: 2019},
    {titulo: "Jumanji", diretor: "Joe Johnston", anoLancamento: 1996},
    {titulo: "Uma noite no museu", diretor: "Shawn Levy", anoLancamento: 2006},
    {titulo: "Bolt supercão", diretor: "Byron Howard", anoLancamento: 2009},
]

let nomeFilmes = []
let i = 0
filmes.forEach(nome => {
    nomeFilmes[i] = nome.titulo
    i++
})
console.log(nomeFilmes)