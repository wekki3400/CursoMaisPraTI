let transacoes = [
    {tipo: "saida", valor: 200},
    {tipo: "entrada", valor: 300},
    {tipo: "entrada", valor: 150},
    {tipo: "saida", valor: 50},
    {tipo: "entrada", valor: 200},
    {tipo: "saida", valor: 200},
]

let saldoTotal = 0
transacoes.forEach(saldo => {
    if(saldo.tipo === "saida"){
        saldoTotal -= saldo.valor
    } else if(saldo.tipo === "entrada"){
        saldoTotal += saldo.valor
    }
})
console.log(`O saldo total da conta é de ${saldoTotal} reais`)