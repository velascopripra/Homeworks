import { useEffect, useState } from "react"
import Tree from "react-d3-tree"
import ArbolBinario from "./BinaryTree"

const App = () => {
  const [treeData, setTreeData] = useState([])
  const [arbol, setArbol] = useState(null)
  const [recorridos, setRecorridos] = useState({
    inorden: [],
    preorden: [],
    postorden: [],
  })
  const [valorBusqueda, setValorBusqueda] = useState("")
  const [resultadoBusqueda, setResultadoBusqueda] = useState(null)

  useEffect(() => {
    const nuevoArbol = new ArbolBinario()
    
   
    const valores = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45]
    
    valores.forEach((v) => nuevoArbol.insertar(v))

    const inorden = nuevoArbol.inorden()
    const preorden = nuevoArbol.preorden()
    const postorden = nuevoArbol.postorden()

    setRecorridos({ inorden, preorden, postorden })
    setTreeData(nuevoArbol.getTreeData())
    setArbol(nuevoArbol)
  }, [])

  const buscarValor = () => {
    if (valorBusqueda && arbol) {
      const valor = Number.parseInt(valorBusqueda)
      const encontrado = arbol.contiene(valor)
      setResultadoBusqueda({ valor, encontrado })
    }
  }

  return (
    <div className="app-container">
      
      <div className="tree-container">
        {treeData.length > 0 && <Tree data={treeData} orientation="vertical" translate={{ x: 400, y: 100 }} />}
      </div>

      
      <div className="panel-container">
        <h2>Recorridos del Árbol</h2>

        <div style={{ marginBottom: "20px" }}>
          <h3>Inorden:</h3>
          <p>{recorridos.inorden.join(", ")}</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Preorden:</h3>
          <p>{recorridos.preorden.join(", ")}</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Postorden:</h3>
          <p>{recorridos.postorden.join(", ")}</p>
        </div>

        <hr style={{ margin: "20px 0", borderColor: "#444" }} />

        <h2>Buscar Valor</h2>
        <div className="search-container">
          <input
            type="number"
            placeholder="Ingresa un valor"
            value={valorBusqueda}
            onChange={(e) => setValorBusqueda(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && buscarValor()}
          />
          <button onClick={buscarValor}>Buscar</button>
        </div>

        {resultadoBusqueda && (
          <div className={`result-container ${resultadoBusqueda.encontrado ? "result-success" : "result-error"}`}>
            El valor {resultadoBusqueda.valor} {resultadoBusqueda.encontrado ? "SÍ" : "NO"} está en el árbol
          </div>
        )}
      </div>
    </div>
  )
}

export default App
