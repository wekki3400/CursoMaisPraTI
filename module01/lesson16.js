class Node {
    constructor(data){
        this.data = data 
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)
        
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode       
        }

        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log("Index fora dos limites!")
        }

        let newNode = new Node(data)
        let current = this.head

        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        } else if(index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous 
            
            current.previous.next = newNode
            current.previous = newNode
        }

        this.size++

    }

    removeAt(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            } else {
                this.tail = null 
            }
        } else if(index === this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }
        
        this.size--
    }

    getData(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        for(let i = 0; i < index; i++){
            current = current.next
        }

        return current.data
    }

    print(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    clearAll(){
        // let current = this.head
        // while(current !== null){
        //     let nextNode = current.next
        //     current.next = null
        //     current.previous = null
        //     current = nextNode
        // }
        this.tail = null
        this.head = null
        this.size = 0
    }

    // invert(){
    //     let ultimo = this.tail
    //     let listInverted = new DoublyLinkedList()
      
    //     while(ultimo !== null){
    //         listInverted.add(ultimo)
    //         ultimo = ultimo.previous
    //     }
    //     this.list = new DoublyLinkedList()
    //     this.list = listInverted
    // }

    invert() {
        let current = this.tail;
        let listInverted = new DoublyLinkedList();
      
        // Percorre a lista de trás para frente e adiciona os dados à nova lista invertida
        while (current !== null) {
            listInverted.add(current.data); // Adiciona os dados e não o nó inteiro
            current = current.previous;
        }
        
        // Substitui a lista atual pela lista invertida
        this.head = listInverted.head;
        this.tail = listInverted.tail;
        this.size = listInverted.size;
    }
    
}

let list = new DoublyLinkedList()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.invert()
//console.log(listainvertida.head)
list.print()


// console.log("Elemento na posicao 2", list.getData(2))
// console.log("A lista esta vazia?", list.isEmpty())
// console.log("tamanho da lista?", list.getSize())

console.log("o pedro fez esse commit")