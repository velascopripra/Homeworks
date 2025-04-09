class Cola {
    constructor() { 
      this.items = [];
     }
    enqueue(item) {
       this.items.push(item); 
      }
    dequeue() { 
      return this.items.shift();
     }
    getAll() { 
      return [...this.items]; 
    }
  }
  export default Cola;