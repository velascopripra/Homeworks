import Cola from "./Cola";
import Pila from "./Pila";
class ClienteNode {
  constructor(nombre) {
    this.nombre = nombre;
    this.consultas = new Cola();
    this.reclamos = new Pila();
    this.next = null;
  }
}
class ClienteList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addCliente(nombre) {
    const nuevo = new ClienteNode(nombre);
    if (!this.head) this.head = nuevo;
    else this.tail.next = nuevo;
    this.tail = nuevo;
    return nuevo;
  }
  findCliente(nombre) {
    let current = this.head;
    while (current) {
      if (current.nombre === nombre) return current;
      current = current.next;
    }
    return null;
  }
  getAll() {
    const clientes = [];
    let current = this.head;
    while (current) {
      clientes.push(current);
      current = current.next;
    }
    return clientes;
  }
}
export default ClienteList;