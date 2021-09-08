import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'

const DropdownMenu = ({ setLoggedIn, setIsOpen }) => {
  return (
    <ul className="dropdown-menu">
      <DropdownMenuItem data={"Profile"} />
      <DropdownMenuItem data={"Settings"} />
      <DropdownMenuItem data={"Placeholder"} />
      <DropdownMenuItem data={"Placeholder"} />
      <DropdownMenuItem data={"Placeholder"} />
      <DropdownMenuItem data={"Logout"} 
      setLoggedIn={setLoggedIn}
      setIsOpen={setIsOpen} />
    </ul>
  )
}

export default DropdownMenu
