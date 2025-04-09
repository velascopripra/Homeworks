class Pila {
    constructor() { 
      this.items = []; 
    }
    push(item) { 
      this.items.push(item); 
    }
    pop() { 
      return this.items.pop(); 
    }
    getAll() { 
      return [...this.items].reverse(); 
    }
  }
  export default Pila;