
import { useState, useEffect } from "react"
import { Graph } from "react-d3-graph"
import { CityGraph } from "../models/CityGraph"
import CityForm from "./CityForm"
import GreenZoneManager from "./GreenZoneManager"
import CityStatistics from "./CityStatistics"
import "../styles/CityNetwork.scss"

const CityNetwork = () => {
  const [cityGraph] = useState(new CityGraph())
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })
  const [selectedCity, setSelectedCity] = useState(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  
  const graphConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "#4CAF50",
      size: 800,
      highlightStrokeColor: "#2E7D32",
      labelProperty: "label",
      renderLabel: true,
      fontColor: "#333",
      fontSize: 14,
      fontWeight: "bold",
      labelPosition: "center",
    },
    link: {
      highlightColor: "#8BC34A",
      strokeWidth: 3,
    },
    directed: false,
    height: 600,
    width: 800,
    d3: {
      gravity: -300,
      linkLength: 200,
      linkStrength: 1,
    },
  }

  
  useEffect(() => {
    const loadData = () => {
      
      const loaded = cityGraph.loadFromLocalStorage()

      if (!loaded) {
        
        console.log("No se encontraron datos guardados, cargando datos de ejemplo...")
        cityGraph.initializeWithExampleData()
      } else {
        console.log("Datos cargados desde localStorage exitosamente")
      }

      setIsLoaded(true)
      updateGraphData()
    }

    loadData()
  }, [])

  
  useEffect(() => {
    if (isLoaded) {
      updateGraphData()
    }
  }, [refreshTrigger, isLoaded])

  
  const updateGraphData = () => {
    setGraphData(cityGraph.getGraphData())
  }

  
  const handleNodeClick = (nodeId) => {
    setSelectedCity(nodeId)
  }

  
  const handleAddCity = (city) => {
    cityGraph.addCity(city)
    setRefreshTrigger((prev) => prev + 1)
  }

  
  const handleRemoveCity = (cityId) => {
    cityGraph.removeCity(cityId)
    if (selectedCity === cityId) {
      setSelectedCity(null)
    }
    setRefreshTrigger((prev) => prev + 1)
  }

  
  const handleConnectCities = (cityId1, cityId2) => {
    cityGraph.connectCities(cityId1, cityId2)
    setRefreshTrigger((prev) => prev + 1)
  }

  
  const handleAddGreenZone = (cityId, zone) => {
    cityGraph.addGreenZone(cityId, zone)
    setRefreshTrigger((prev) => prev + 1)
  }

  
  const handleAddSubZone = (cityId, parentZoneId, subZone) => {
    cityGraph.addSubZone(cityId, parentZoneId, subZone)
    setRefreshTrigger((prev) => prev + 1)
  }

  
  const handleEditGreenZone = (cityId, zoneId, newName) => {
    cityGraph.editGreenZone(cityId, zoneId, newName)
    setRefreshTrigger((prev) => prev + 1)
  }

  if (!isLoaded) {
    return (
      <div className="city-network">
        <div className="city-network__header">
          <h1>Cargando Red de Ciudades...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="city-network">
      <div className="city-network__header">
        <h1>Red de Ciudades con Zonas Verdes</h1>
      </div>

      <div className="city-network__content">
        <div className="city-network__graph">
          <Graph id="city-graph" data={graphData} config={graphConfig} onClickNode={handleNodeClick} />
        </div>

        <div className="city-network__controls">
          <div className="city-network__forms">
            <CityForm
              onAddCity={handleAddCity}
              onRemoveCity={handleRemoveCity}
              onConnectCities={handleConnectCities}
              cities={cityGraph.getAllCities()}
            />
          </div>

          {selectedCity && (
            <div className="city-network__selected-city">
              <h2>Ciudad: {cityGraph.getCity(selectedCity)?.name}</h2>

              <GreenZoneManager
                city={cityGraph.getCity(selectedCity)}
                onAddGreenZone={handleAddGreenZone}
                onAddSubZone={handleAddSubZone}
                onEditGreenZone={handleEditGreenZone}
              />

              <CityStatistics
                maxHeight={cityGraph.calculateMaxHeight(selectedCity)}
                totalZones={cityGraph.calculateTotalGreenZones(selectedCity)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CityNetwork
