import React, { useState } from "react"
import SidebarSection from "./SidebarSection"

const Sidebar = () => {
  const [shelves, setShelves] = useState([
    "Sci-Fi",
    "Fantasy",
    "Tech",
    "Drama",
    "Thriller",
  ])


  return (
    <div className="sidebar">
      {shelves.length > 0 && <>
        <SidebarSection name="Premade shelves" 
        shelves={shelves}
        setShelves={setShelves} />
        <hr className="sidebar-section-divider" />
      </>}
      <SidebarSection name="Your shelves" />
    </div>
  )
}

export default Sidebar
