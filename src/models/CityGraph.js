export class CityGraph {
    constructor() {
      this.cities = new Map()
      this.adjacencyList = new Map()
    }
  
   
    addCity(city) {
      if (!this.cities.has(city.id)) {
        this.cities.set(city.id, { ...city, greenZones: [] })
        this.adjacencyList.set(city.id, new Set())
        this.saveToLocalStorage()
      }
    }
  
    
    removeCity(cityId) {
      if (this.cities.has(cityId)) {
        
        this.adjacencyList.forEach((connections) => {
          connections.delete(cityId)
        })
  
        
        this.adjacencyList.delete(cityId)
        this.cities.delete(cityId)
        this.saveToLocalStorage()
      }
    }
  
    
    connectCities(cityId1, cityId2) {
      if (this.cities.has(cityId1) && this.cities.has(cityId2)) {
        this.adjacencyList.get(cityId1)?.add(cityId2)
        this.adjacencyList.get(cityId2)?.add(cityId1)
        this.saveToLocalStorage()
      }
    }
  
    
    disconnectCities(cityId1, cityId2) {
      if (this.cities.has(cityId1) && this.cities.has(cityId2)) {
        this.adjacencyList.get(cityId1)?.delete(cityId2)
        this.adjacencyList.get(cityId2)?.delete(cityId1)
        this.saveToLocalStorage()
      }
    }
  
    
    addGreenZone(cityId, zone) {
      const city = this.cities.get(cityId)
      if (city) {
        city.greenZones.push(zone)
        this.saveToLocalStorage()
      }
    }
  
    
    addSubZone(cityId, parentZoneId, subZone) {
      const city = this.cities.get(cityId)
      if (!city) return
  
      const findAndAddSubZone = (zones) => {
        for (const zone of zones) {
          if (zone.id === parentZoneId) {
            zone.subzones.push(subZone)
            return true
          }
          if (zone.subzones.length > 0 && findAndAddSubZone(zone.subzones)) {
            return true
          }
        }
        return false
      }
  
      if (findAndAddSubZone(city.greenZones)) {
        this.saveToLocalStorage()
      }
    }
  
    
    editGreenZone(cityId, zoneId, newName) {
      const city = this.cities.get(cityId)
      if (!city) return
  
      const findAndEditZone = (zones) => {
        for (const zone of zones) {
          if (zone.id === zoneId) {
            zone.name = newName
            return true
          }
          if (zone.subzones.length > 0 && findAndEditZone(zone.subzones)) {
            return true
          }
        }
        return false
      }
  
      if (findAndEditZone(city.greenZones)) {
        this.saveToLocalStorage()
      }
    }
  
    
    calculateMaxHeight(cityId) {
      const city = this.cities.get(cityId)
      if (!city || city.greenZones.length === 0) return 0
  
      const calculateHeight = (zone) => {
        if (zone.subzones.length === 0) return 1
        return 1 + Math.max(...zone.subzones.map(calculateHeight))
      }
  
      return Math.max(...city.greenZones.map(calculateHeight))
    }
  
    
    calculateTotalGreenZones(cityId) {
      const city = this.cities.get(cityId)
      if (!city) return 0
  
      const countZones = (zone) => {
        return 1 + zone.subzones.reduce((sum, subZone) => sum + countZones(subZone), 0)
      }
  
      return city.greenZones.reduce((sum, zone) => sum + countZones(zone), 0)
    }
  
    
    getAllCities() {
      return Array.from(this.cities.values())
    }
  
    
    getCity(cityId) {
      return this.cities.get(cityId)
    }
  
    
    getConnectedCities(cityId) {
      const connectedIds = this.adjacencyList.get(cityId)
      if (!connectedIds) return []
  
      return Array.from(connectedIds)
        .map((id) => this.cities.get(id))
        .filter((city) => city !== undefined)
    }
  
    
    getGraphData() {
      const nodes = Array.from(this.cities.values()).map((city) => ({
        id: city.id,
        label: city.name,
        color: "#4CAF50",
        size: 800,
        fontColor: "#333",
        fontSize: 14,
        renderLabel: true,
      }))
  
      const links = Array.from(this.adjacencyList.entries()).flatMap(([cityId, connections]) =>
        Array.from(connections).map((targetId) => ({
          source: cityId,
          target: targetId,
          strokeWidth: 3,
        })),
      )
  
      return { nodes, links }
    }
  
    
    saveToLocalStorage() {
      try {
        const data = {
          cities: Array.from(this.cities.entries()),
          adjacencyList: Array.from(this.adjacencyList.entries()).map(([key, value]) => [key, Array.from(value)]),
        }
        localStorage.setItem("cityNetworkData", JSON.stringify(data))
        console.log("Datos guardados en localStorage")
      } catch (error) {
        console.error("Error al guardar en localStorage:", error)
      }
    }
  
    
    loadFromLocalStorage() {
      try {
        const savedData = localStorage.getItem("cityNetworkData")
        if (savedData) {
          const data = JSON.parse(savedData)
  
          
          this.cities = new Map(data.cities)
  
          
          this.adjacencyList = new Map(data.adjacencyList.map(([key, value]) => [key, new Set(value)]))
  
          console.log("Datos cargados desde localStorage")
          return true
        }
      } catch (error) {
        console.error("Error al cargar desde localStorage:", error)
      }
      return false
    }
  
    // ejemplo de ciudades colombianas
    initializeWithExampleData() {
      
      this.addCityWithoutSave({ id: "c1", name: "Bogotá" })
      this.addCityWithoutSave({ id: "c2", name: "Medellín" })
      this.addCityWithoutSave({ id: "c3", name: "Cali" })
      this.addCityWithoutSave({ id: "c4", name: "Barranquilla" })
      this.addCityWithoutSave({ id: "c5", name: "Cartagena" })
      this.addCityWithoutSave({ id: "c6", name: "Pereira" })
      this.addCityWithoutSave({ id: "c7", name: "Bucaramanga" })
  
      // Conectar ciudades
      this.connectCitiesWithoutSave("c1", "c2") // Bogotá - Medellín
      this.connectCitiesWithoutSave("c1", "c3") // Bogotá - Cali
      this.connectCitiesWithoutSave("c1", "c7") // Bogotá - Bucaramanga
      this.connectCitiesWithoutSave("c2", "c3") // Medellín - Cali
      this.connectCitiesWithoutSave("c2", "c6") // Medellín - Pereira
      this.connectCitiesWithoutSave("c3", "c6") // Cali - Pereira
      this.connectCitiesWithoutSave("c4", "c5") // Barranquilla - Cartagena
      this.connectCitiesWithoutSave("c7", "c4") // Bucaramanga - Barranquilla
  
      // Zonas verdes de Bogotá
      this.addGreenZoneWithoutSave("c1", { id: "g1", name: "Parque Simón Bolívar", subzones: [] })
      this.addGreenZoneWithoutSave("c1", { id: "g2", name: "Parque Nacional Enrique Olaya Herrera", subzones: [] })
      this.addGreenZoneWithoutSave("c1", { id: "g3", name: "Parque El Virrey", subzones: [] })
  
      // Subzonas del Parque Simón Bolívar
      this.addSubZoneWithoutSave("c1", "g1", { id: "g1-1", name: "Lago Central", subzones: [] })
      this.addSubZoneWithoutSave("c1", "g1", { id: "g1-2", name: "Zona Deportiva", subzones: [] })
      this.addSubZoneWithoutSave("c1", "g1", { id: "g1-3", name: "Biblioteca Virgilio Barco", subzones: [] })
  
      // Sub-subzonas del Lago Central
      this.addSubZoneWithoutSave("c1", "g1-1", { id: "g1-1-1", name: "Sendero Ecológico", subzones: [] })
      this.addSubZoneWithoutSave("c1", "g1-1", { id: "g1-1-2", name: "Área de Pesca", subzones: [] })
  
      // Zonas verdes de Medellín
      this.addGreenZoneWithoutSave("c2", { id: "g4", name: "Parque Arví", subzones: [] })
      this.addGreenZoneWithoutSave("c2", { id: "g5", name: "Jardín Botánico", subzones: [] })
      this.addGreenZoneWithoutSave("c2", { id: "g6", name: "Parque de los Deseos", subzones: [] })
  
      // Subzonas del Parque Arví
      this.addSubZoneWithoutSave("c2", "g4", { id: "g4-1", name: "Senderos Ecológicos", subzones: [] })
      this.addSubZoneWithoutSave("c2", "g4", { id: "g4-2", name: "Zona de Camping", subzones: [] })
      this.addSubZoneWithoutSave("c2", "g4-1", { id: "g4-1-1", name: "Mirador Principal", subzones: [] })
  
      // Zonas verdes de Cali
      this.addGreenZoneWithoutSave("c3", { id: "g7", name: "Parque del Perro", subzones: [] })
      this.addGreenZoneWithoutSave("c3", { id: "g8", name: "Ecoparque Río Pance", subzones: [] })
      this.addGreenZoneWithoutSave("c3", { id: "g9", name: "Parque de la Caña", subzones: [] })
  
      // Subzonas del Ecoparque Río Pance
      this.addSubZoneWithoutSave("c3", "g8", { id: "g8-1", name: "Zona de Balnearios", subzones: [] })
      this.addSubZoneWithoutSave("c3", "g8", { id: "g8-2", name: "Sendero del Río", subzones: [] })
      this.addSubZoneWithoutSave("c3", "g8-2", { id: "g8-2-1", name: "Cascada La Chorrera", subzones: [] })
  
      // Zonas verdes de Barranquilla
      this.addGreenZoneWithoutSave("c4", { id: "g10", name: "Parque Suri Salcedo", subzones: [] })
      this.addGreenZoneWithoutSave("c4", { id: "g11", name: "Malecón del Río", subzones: [] })
      this.addSubZoneWithoutSave("c4", "g11", { id: "g11-1", name: "Plaza de la Paz", subzones: [] })
  
      // Zonas verdes de Cartagena
      this.addGreenZoneWithoutSave("c5", { id: "g12", name: "Parque del Centenario", subzones: [] })
      this.addGreenZoneWithoutSave("c5", { id: "g13", name: "Jardín Botánico Guillermo Piñeres", subzones: [] })
      this.addSubZoneWithoutSave("c5", "g13", { id: "g13-1", name: "Mariposario", subzones: [] })
      this.addSubZoneWithoutSave("c5", "g13", { id: "g13-2", name: "Orquideario", subzones: [] })
  
      // Zonas verdes de Pereira
      this.addGreenZoneWithoutSave("c6", { id: "g14", name: "Parque Ukumarí", subzones: [] })
      this.addGreenZoneWithoutSave("c6", { id: "g15", name: "Jardín Botánico UTP", subzones: [] })
      this.addSubZoneWithoutSave("c6", "g14", { id: "g14-1", name: "Safari", subzones: [] })
      this.addSubZoneWithoutSave("c6", "g14", { id: "g14-2", name: "Senderos Naturales", subzones: [] })
  
      // Zonas verdes de Bucaramanga
      this.addGreenZoneWithoutSave("c7", { id: "g16", name: "Parque del Agua", subzones: [] })
      this.addGreenZoneWithoutSave("c7", { id: "g17", name: "Parque Santander", subzones: [] })
      this.addSubZoneWithoutSave("c7", "g16", { id: "g16-1", name: "Zona Acuática", subzones: [] })
      this.addSubZoneWithoutSave("c7", "g16", { id: "g16-2", name: "Sendero Ecológico", subzones: [] })
  
      
      this.saveToLocalStorage()
    }
  
    
    addCityWithoutSave(city) {
      if (!this.cities.has(city.id)) {
        this.cities.set(city.id, { ...city, greenZones: [] })
        this.adjacencyList.set(city.id, new Set())
      }
    }
  
    connectCitiesWithoutSave(cityId1, cityId2) {
      if (this.cities.has(cityId1) && this.cities.has(cityId2)) {
        this.adjacencyList.get(cityId1)?.add(cityId2)
        this.adjacencyList.get(cityId2)?.add(cityId1)
      }
    }
  
    addGreenZoneWithoutSave(cityId, zone) {
      const city = this.cities.get(cityId)
      if (city) {
        city.greenZones.push(zone)
      }
    }
  
    addSubZoneWithoutSave(cityId, parentZoneId, subZone) {
      const city = this.cities.get(cityId)
      if (!city) return
  
      const findAndAddSubZone = (zones) => {
        for (const zone of zones) {
          if (zone.id === parentZoneId) {
            zone.subzones.push(subZone)
            return true
          }
          if (zone.subzones.length > 0 && findAndAddSubZone(zone.subzones)) {
            return true
          }
        }
        return false
      }
  
      findAndAddSubZone(city.greenZones)
    }
  }
  