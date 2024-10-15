let pedidos = [
    {cliente: "Miguel", produto: "Teclado", quantidade: 14},
    {cliente: "Pablo", produto: "Mouse", quantidade: 12},
    {cliente: "Emma", produto: "Microfone", quantidade: 9},
    {cliente: "Miguel", produto: "MousePad", quantidade: 5},
    {cliente: "Caio", produto: "Monitor", quantidade: 7},
    {cliente: "Caio", produto: "Headset", quantidade: 16},
    {cliente: "Nicolas", produto: "Mouse", quantidade: 10},
    {cliente: "Nicolas", produto: "Cadeira", quantidade: 15},
]

let pedidosPorCliente = {}
pedidos.forEach(pedido => {
    if(pedidosPorCliente[pedido.cliente]){
        pedidosPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        pedidosPorCliente[pedido.cliente] = pedido.quantidade
    }
})

for(let pedidos in pedidosPorCliente){
    console.log(`O cliente ${pedidos} pediu ${pedidosPorCliente[pedidos]} produtos`)
}