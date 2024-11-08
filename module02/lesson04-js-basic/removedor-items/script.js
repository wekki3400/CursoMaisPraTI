let titulo = document.getElementById('titulo')
let lista = document.getElementById('lista')
let botaoAdicionar = document.getElementById('btnAdc')
let botaoRemover = document.getElementById('btnRmv')

botaoAdicionar.addEventListener('click', adicionar)
botaoRemover.addEventListener('click', remover)

function adicionar(){
    titulo.style.color = 'green'
    titulo.innerText = 'Novo item adicionado!'
    let novoLi = document.createElement('li')
    lista.appendChild(novoLi)
    novoLi.innerText = `item ${lista.childElementCount}`
}

function remover(){
    if(lista.childElementCount === 0){
        titulo.style.color = 'grey'
        titulo.innerText = 'Não há itens a serem removidos!'
    } else {
        titulo.style.color = 'red'
        titulo.innerText = 'Item removido!'
        let rmvLi = document.querySelector('li:last-child')
        rmvLi.remove()
    }
}