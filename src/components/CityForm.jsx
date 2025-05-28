import { useState } from "react"
import "../styles/CityForm.scss"

const CityForm = ({ onAddCity, onRemoveCity, onConnectCities, cities }) => {
  const [cityName, setCityName] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedCity1, setSelectedCity1] = useState("")
  const [selectedCity2, setSelectedCity2] = useState("")

  const handleAddCity = (e) => {
    e.preventDefault()
    if (cityName.trim()) {
      const newCity = {
        id: `c${Date.now()}`,
        name: cityName.trim(),
      }
      onAddCity(newCity)
      setCityName("")
    }
  }

  const handleRemoveCity = (e) => {
    e.preventDefault()
    if (selectedCity) {
      onRemoveCity(selectedCity)
      setSelectedCity("")
    }
  }

  const handleConnectCities = (e) => {
    e.preventDefault()
    if (selectedCity1 && selectedCity2 && selectedCity1 !== selectedCity2) {
      onConnectCities(selectedCity1, selectedCity2)
      setSelectedCity1("")
      setSelectedCity2("")
    }
  }

  return (
    <div className="city-form">
      <h3>Gestión de Ciudades</h3>

      <form onSubmit={handleAddCity} className="city-form__add">
        <h4>Añadir Ciudad</h4>
        <div className="form-group">
          <label htmlFor="cityName">Nombre:</label>
          <input
            type="text"
            id="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Nombre de la ciudad"
            required
          />
        </div>
        <button type="submit">Añadir Ciudad</button>
      </form>

      <form onSubmit={handleRemoveCity} className="city-form__remove">
        <h4>Eliminar Ciudad</h4>
        <div className="form-group">
          <label htmlFor="cityToRemove">Ciudad:</label>
          <select id="cityToRemove" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required>
            <option value="">Seleccionar ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Eliminar Ciudad</button>
      </form>

      <form onSubmit={handleConnectCities} className="city-form__connect">
        <h4>Conectar Ciudades</h4>
        <div className="form-group">
          <label htmlFor="city1">Ciudad 1:</label>
          <select id="city1" value={selectedCity1} onChange={(e) => setSelectedCity1(e.target.value)} required>
            <option value="">Seleccionar ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city2">Ciudad 2:</label>
          <select id="city2" value={selectedCity2} onChange={(e) => setSelectedCity2(e.target.value)} required>
            <option value="">Seleccionar ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Conectar Ciudades</button>
      </form>
    </div>
  )
}

export default CityForm
