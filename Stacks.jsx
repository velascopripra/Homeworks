class Stacks {
    constructor() {
        this.Books = []
    }

    push(value){
        this.Books.push(value)
    }

    print(){
        this.Books.slice().reverse().forEach(book => { console.log(book)})
    }


}


export default Stacks