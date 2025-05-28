
import { useState } from "react"
import GreenZoneTree from "./GreenZoneTree"
import "../styles/GreenZoneManager.scss"

const GreenZoneManager = ({ city, onAddGreenZone, onAddSubZone, onEditGreenZone }) => {
  const [zoneName, setZoneName] = useState("")
  const [subZoneName, setSubZoneName] = useState("")
  const [selectedParentZone, setSelectedParentZone] = useState("")
  const [editZoneId, setEditZoneId] = useState("")
  const [editZoneName, setEditZoneName] = useState("")

  
  const getAllZones = (zones) => {
    return zones.reduce((acc, zone) => {
      return [...acc, zone, ...getAllZones(zone.subzones)]
    }, [])
  }

  const handleAddZone = (e) => {
    e.preventDefault()
    if (zoneName.trim()) {
      const newZone = {
        id: `gz${Date.now()}`,
        name: zoneName.trim(),
        subzones: [],
      }
      onAddGreenZone(city.id, newZone)
      setZoneName("")
    }
  }

  const handleAddSubZone = (e) => {
    e.preventDefault()
    if (subZoneName.trim() && selectedParentZone) {
      const newSubZone = {
        id: `gz${Date.now()}`,
        name: subZoneName.trim(),
        subzones: [],
      }
      onAddSubZone(city.id, selectedParentZone, newSubZone)
      setSubZoneName("")
      setSelectedParentZone("")
    }
  }

  const handleEditZone = (e) => {
    e.preventDefault()
    if (editZoneId && editZoneName.trim()) {
      onEditGreenZone(city.id, editZoneId, editZoneName.trim())
      setEditZoneId("")
      setEditZoneName("")
    }
  }

  const allZones = getAllZones(city.greenZones)

  return (
    <div className="green-zone-manager">
      <h3>Zonas Verdes de {city.name}</h3>

      <div className="green-zone-manager__forms">
        <form onSubmit={handleAddZone} className="green-zone-form">
          <h4>Añadir Zona Verde</h4>
          <div className="form-group">
            <label htmlFor="zoneName">Nombre:</label>
            <input
              type="text"
              id="zoneName"
              value={zoneName}
              onChange={(e) => setZoneName(e.target.value)}
              placeholder="Nombre de la zona verde"
              required
            />
          </div>
          <button type="submit">Añadir Zona</button>
        </form>

        <form onSubmit={handleAddSubZone} className="green-zone-form">
          <h4>Añadir Subzona</h4>
          <div className="form-group">
            <label htmlFor="parentZone">Zona Padre:</label>
            <select
              id="parentZone"
              value={selectedParentZone}
              onChange={(e) => setSelectedParentZone(e.target.value)}
              required
            >
              <option value="">Seleccionar zona</option>
              {allZones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subZoneName">Nombre:</label>
            <input
              type="text"
              id="subZoneName"
              value={subZoneName}
              onChange={(e) => setSubZoneName(e.target.value)}
              placeholder="Nombre de la subzona"
              required
            />
          </div>
          <button type="submit">Añadir Subzona</button>
        </form>

        <form onSubmit={handleEditZone} className="green-zone-form">
          <h4>Editar Zona Verde</h4>
          <div className="form-group">
            <label htmlFor="zoneToEdit">Zona:</label>
            <select
              id="zoneToEdit"
              value={editZoneId}
              onChange={(e) => {
                setEditZoneId(e.target.value)
                const selectedZone = allZones.find((z) => z.id === e.target.value)
                if (selectedZone) {
                  setEditZoneName(selectedZone.name)
                }
              }}
              required
            >
              <option value="">Seleccionar zona</option>
              {allZones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="editZoneName">Nuevo nombre:</label>
            <input
              type="text"
              id="editZoneName"
              value={editZoneName}
              onChange={(e) => setEditZoneName(e.target.value)}
              placeholder="Nuevo nombre"
              required
            />
          </div>
          <button type="submit">Actualizar Zona</button>
        </form>
      </div>

      <div className="green-zone-manager__tree">
        <h4>Jerarquía de Zonas Verdes</h4>
        {city.greenZones.length > 0 ? (
          <div className="green-zone-tree-container">
            {city.greenZones.map((zone) => (
              <GreenZoneTree key={zone.id} zone={zone} />
            ))}
          </div>
        ) : (
          <p>No hay zonas verdes en esta ciudad.</p>
        )}
      </div>
    </div>
  )
}

export default GreenZoneManager
