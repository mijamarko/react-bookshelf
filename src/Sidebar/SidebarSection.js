import React, { useState } from "react"
import Shelf from "./Shelf"
// name, shelves

const SidebarSection = ({ name, shelves, setShelves }) => {
  const [selectedShelfIndex, setSelectedShelfIndex] = useState(0)

  return (
    <div className="sidebar-section">
      <span className="sidebar-section-heading"> {name} </span>
      {shelves && shelves.map((shelf, idx) => (
        <Shelf name={shelf} 
        key={idx}
        index={idx}
        selectedShelfIndex={selectedShelfIndex}
        setSelectedShelfIndex={setSelectedShelfIndex}
        shelves={shelves}
        setShelves={setShelves} />
      ))}
    </div>
  )
}

export default SidebarSection
