class Grafo {
  constructor() {
    this.nodes = []
    this.adjList = {}
  }

  addNode(node) {
    this.nodes.push(node)
    this.adjList[node.id] = []
  }

  addEdge(node1, node2) {
    this.adjList[node1.id].push(node2.id)
    this.adjList[node2.id].push(node1.id)
  }

  searchNode(id) {
    return this.nodes.find((n) => n.id === id)
  }

  printAdjacency(id) {
    return this.adjList[id]
  }

  getPeopleInCity(cityId) {
    return this.adjList[cityId].map((id) => this.searchNode(id)).filter((node) => node && node.type === "person")
  }

  getGraphData() {
    return {
      nodes: this.nodes.map((n) => ({
        id: n.id,
        label: n.label,
        color: n.type === "city" ? "#4CAF50" : "#2196F3",
        symbolType: n.type === "city" ? "square" : "circle",
        size: n.type === "city" ? 700 : 500,
      })),
      links: Object.entries(this.adjList).flatMap(([from, tos]) => tos.map((to) => ({ source: from, target: to }))),
    }
  }
}

export default Grafo
