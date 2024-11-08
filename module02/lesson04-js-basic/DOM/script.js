let titulo = document.getElementById('titulo')
console.log(titulo.textContent)

titulo.textContent = 'Aula de JS básico'
console.log(titulo.textContent)

titulo.innerHTML = 'Mudei de novo'
console.log(titulo.textContent)

titulo.style.color = 'blue'

let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    alert('Voce clicou no botão')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = 'Este é um parágrafo criado via JS'

document.body.appendChild(novoParagrafo)

let parágrafo = document.querySelector('.paragrafo')

parágrafo.remove()