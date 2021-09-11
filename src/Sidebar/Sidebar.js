import React from "react"
import SidebarSection from "./SidebarSection"
import CreateShelf from "./CreateShelf"

const Sidebar = ({ stateData }) => {
  return (
    <div className="sidebar">
      {stateData.premadeShelfData.length > 0 && (
        <>
          <SidebarSection
            name="Premade shelves"
            shelves={stateData.premadeShelfData}
            setShelves={stateData.setPremadeShelfData}
            selectedShelfIndex={stateData.selectedShelfIndex}
            setSelectedShelfIndex={stateData.setSelectedShelfIndex}
            allShelves={stateData.allShelves}
            setAllShelves={stateData.setAllShelves}
            setShelfData={stateData.setShelfData}
          />
          <hr className="sidebar-section-divider" />
        </>
      )}

      <SidebarSection
        name={`Your shelves ${
          stateData.userShelfData.length > 0 ? "" : "go here"
        }`}
        shelves={stateData.userShelfData}
        setShelves={stateData.setUserShelfData}
        selectedShelfIndex={stateData.selectedShelfIndex}
        setSelectedShelfIndex={stateData.setSelectedShelfIndex}
        allShelves={stateData.allShelves}
        setAllShelves={stateData.setAllShelves}
        shelfData={stateData.shelfData}
        setShelfData={stateData.setShelfData}
      />

      <CreateShelf
        userShelves={stateData.userShelfData}
        setUserShelves={stateData.setUserShelfData}
        allShelves={stateData.allShelves}
        setAllShelves={stateData.setAllShelves}
      />
    </div>
  )
}

export default Sidebar
