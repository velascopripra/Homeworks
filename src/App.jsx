import { useEffect, useState } from "react"
import { Graph } from "react-d3-graph"
import Grafo from "./Grafo"

const App = () => {
  const [data, setData] = useState({ nodes: [], links: [] })
  const [ciudadesInfo, setCiudadesInfo] = useState([])

  useEffect(() => {
    const grafo = new Grafo()

   
    grafo.addNode({ id: "c1", label: "Bogotá", type: "city" })
    grafo.addNode({ id: "c2", label: "Medellín", type: "city" })
    grafo.addNode({ id: "c3", label: "Cali", type: "city" })
    grafo.addNode({ id: "c4", label: "Barranquilla", type: "city" })
    grafo.addNode({ id: "c5", label: "Cartagena", type: "city" })
    grafo.addNode({ id: "c6", label: "Bucaramanga", type: "city" })

    
    grafo.addNode({ id: "p1", label: "Carlos (25)", age: 25, type: "person" })
    grafo.addNode({ id: "p2", label: "María (22)", age: 22, type: "person" })
    grafo.addNode({ id: "p3", label: "Andrés (28)", age: 28, type: "person" })
    grafo.addNode({ id: "p4", label: "Camila (24)", age: 24, type: "person" })
    grafo.addNode({ id: "p5", label: "Santiago (26)", age: 26, type: "person" })
    grafo.addNode({ id: "p6", label: "Valentina (23)", age: 23, type: "person" })
    grafo.addNode({ id: "p7", label: "Diego (27)", age: 27, type: "person" })
    grafo.addNode({ id: "p8", label: "Isabella (21)", age: 21, type: "person" })

    
    grafo.addEdge({ id: "p1" }, { id: "c1" }) 
    grafo.addEdge({ id: "p2" }, { id: "c1" }) 
    grafo.addEdge({ id: "p3" }, { id: "c2" }) 
    grafo.addEdge({ id: "p4" }, { id: "c3" }) 
    grafo.addEdge({ id: "p5" }, { id: "c4" }) 
    grafo.addEdge({ id: "p6" }, { id: "c5" }) 
    grafo.addEdge({ id: "p7" }, { id: "c6" }) 
    grafo.addEdge({ id: "p8" }, { id: "c2" }) 

    
    const ciudades = [
      { id: "c1", nombre: "Bogotá" },
      { id: "c2", nombre: "Medellín" },
      { id: "c3", nombre: "Cali" },
      { id: "c4", nombre: "Barranquilla" },
      { id: "c5", nombre: "Cartagena" },
      { id: "c6", nombre: "Bucaramanga" },
    ]

    const infoCompleta = ciudades.map((ciudad) => ({
      ...ciudad,
      personas: grafo.getPeopleInCity(ciudad.id),
    }))

    setData(grafo.getGraphData())
    setCiudadesInfo(infoCompleta)
  }, [])

  
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "#f5f5f5",
      size: 300,
      highlightStrokeColor: "#333333",
      labelProperty: "label",
      fontColor: "#333333",
      fontSize: 12,
      fontWeight: "normal",
      highlightFontSize: 12,
      highlightFontWeight: "normal",
      renderLabel: true,
      strokeColor: "#e0e0e0",
      strokeWidth: 1,
    },
    link: {
      color: "#cccccc",
      highlightColor: "#666666",
      strokeWidth: 1,
    },
    directed: false,
    height: 600,
    width: 800,
  }

  return (
    <div className="app-container">
      <div className="graph-container">
        <h2>Grafo de Personas y Ciudades</h2>
        <div className="graph-wrapper">
          <Graph id="graph-id" data={data} config={myConfig} />
        </div>
      </div>

      <div className="info-panel">
        <h2>Personas por Ciudad</h2>

        {ciudadesInfo.map((ciudad) => (
          <div key={ciudad.id} className="city-info">
            <h3>{ciudad.nombre}</h3>
            {ciudad.personas.length > 0 ? (
              <ul>
                {ciudad.personas.map((persona) => (
                  <li key={persona.id}>
                    {persona.label.split(" ")[0]} ({persona.age} años)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay personas registradas</p>
            )}
            <div className="city-stats">Total: {ciudad.personas.length}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
