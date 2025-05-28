import "../styles/CityStatistics.scss"

const CityStatistics = ({ maxHeight, totalZones }) => {
  return (
    <div className="city-statistics">
      <h3>Estadística de Zonas Verdes en esta ciudad</h3>
      <div className="city-statistics__data">
        <div className="city-statistics__item">
          <span className="city-statistics__label">Nivel máximo:</span>
          <span className="city-statistics__value">{maxHeight}</span>
        </div>
        <div className="city-statistics__item">
          <span className="city-statistics__label">Total de zonas verdes:</span>
          <span className="city-statistics__value">{totalZones}</span>
        </div>
      </div>
    </div>
  )
}

export default CityStatistics
