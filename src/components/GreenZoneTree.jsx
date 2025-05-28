import "../styles/GreenZoneTree.scss"

const GreenZoneTree = ({ zone, level = 0 }) => {
  return (
    <div className="green-zone-tree" style={{ marginLeft: `${level * 20}px` }}>
      <div className="green-zone-tree__node">
        <span className="green-zone-tree__name">{zone.name}</span>
      </div>
      {zone.subzones.length > 0 && (
        <div className="green-zone-tree__children">
          {zone.subzones.map((subzone) => (
            <GreenZoneTree key={subzone.id} zone={subzone} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default GreenZoneTree
