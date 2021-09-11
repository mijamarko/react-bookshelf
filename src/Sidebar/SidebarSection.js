import React from "react"
import Shelf from "./Shelf"
// name, shelves

const SidebarSection = ({name, shelves, setShelves, selectedShelfIndex, setSelectedShelfIndex, allShelves, setAllShelves, setShelfData}) => {
  

  return (
    <div className="sidebar-section">
      <span className="sidebar-section-heading"> {name} </span>
      {shelves && shelves.map(shelf => (
        <Shelf 
          name={shelf.name}
          tag={shelf.tag} 
          key={shelf.index}
          index={allShelves.indexOf(shelf)}
          selectedShelfIndex={selectedShelfIndex}
          setSelectedShelfIndex={setSelectedShelfIndex}
          shelves={shelves}
          setShelves={setShelves}
          allShelves={allShelves}
          setAllShelves={setAllShelves}
          setShelfData={setShelfData} 
        />
      ))}
    </div>
  )
}

export default SidebarSection
