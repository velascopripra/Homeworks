class Nodo {
  constructor(valor) {
    this.valor = valor.toString()
    this.izquierda = null
    this.derecha = null
  }

  isLeaf() {
    return this.izquierda === null && this.derecha === null
  }
}

export class ArbolBinario {
  constructor() {
    this.raiz = null
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor)
    if (!this.raiz) {
      this.raiz = nuevoNodo
      return
    }

    let actual = this.raiz
    while (true) {
      if (valor < Number.parseInt(actual.valor)) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo
          return
        }
        actual = actual.izquierda
      } else {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo
          return
        }
        actual = actual.derecha
      }
    }
  }

  contiene(valor) {
    let actual = this.raiz
    while (actual) {
      if (actual.valor === valor.toString()) return true
      actual = valor < Number.parseInt(actual.valor) ? actual.izquierda : actual.derecha
    }
    return false
  }

  preorden(nodo = this.raiz, resultado = []) {
    if (!nodo) return resultado
    resultado.push(nodo.valor)
    this.preorden(nodo.izquierda, resultado)
    this.preorden(nodo.derecha, resultado)
    return resultado
  }

  inorden(nodo = this.raiz, resultado = []) {
    if (!nodo) return resultado
    this.inorden(nodo.izquierda, resultado)
    resultado.push(nodo.valor)
    this.inorden(nodo.derecha, resultado)
    return resultado
  }

  postorden(nodo = this.raiz, resultado = []) {
    if (!nodo) return resultado
    this.postorden(nodo.izquierda, resultado)
    this.postorden(nodo.derecha, resultado)
    resultado.push(nodo.valor)
    return resultado
  }

  aFormatoD3(nodo = this.raiz) {
    if (!nodo) return null

    const nodoD3 = {
      name: nodo.valor,
    }

    const hijos = []
    const hijoIzq = this.aFormatoD3(nodo.izquierda)
    const hijoDer = this.aFormatoD3(nodo.derecha)

    if (hijoIzq) hijos.push(hijoIzq)
    if (hijoDer) hijos.push(hijoDer)

    if (hijos.length > 0) {
      nodoD3.children = hijos
    }

    return nodoD3
  }

  getTreeData() {
    const arbol = this.aFormatoD3(this.raiz)
    return arbol ? [arbol] : []
  }
}

export default ArbolBinario
