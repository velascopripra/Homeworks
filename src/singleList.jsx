class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class SingleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
        } else {
            this.tail.next = newNode
        }

        this.tail = newNode
        this.length ++
    }

    peek(value, current = this.head){
        while(current){
            if(current.value === value){
                return current
            }

            current = current.next
        }

        return null
    }

    size(){
        return this.length
    }


    print(){
        let current = this.head
        let result
        while(current){
            result += current.value + " -> "
            current = current.next
        }
        console.log(result + "null")
    }
}

export default SingleLinkedList
