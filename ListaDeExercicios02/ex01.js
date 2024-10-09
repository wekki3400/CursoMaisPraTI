function carro(marca, modelo, ano, cor){
    return {
        marca,
        modelo,
        ano,
        cor
    }
}

let mustang = carro('Ford', "Mustang", '2020', 'Preto')
let camaro = carro('Chevrolet', 'Camaro', '2018', 'Amarelo')

let carros = [mustang, camaro]

for(let key in carros){
    console.log(carros[key])
}