let livro = {
    titulo: "Percy Jackson o Ladrão de Raios",
    autor: "Rick Riordan",
    anoPublicacao: 2005,
    genero: "Ação e Aventura",
}

let temEditora = false
for(let keys in livro){
    if(keys === "editora"){
        temEditora = true
    }   
}

if(!temEditora){
    livro.editora = "Intrínseca"
}
console.log(livro)

