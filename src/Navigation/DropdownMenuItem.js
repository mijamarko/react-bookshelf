import React from "react"

const DropdownMenuItem = ({ data, setLoggedIn, setIsOpen }) => {
  const logOutUser = (e) => {
    e.preventDefault();
    if(setLoggedIn){
      setIsOpen(false);
      setLoggedIn(false);
    }
  }

  return (
    <li className="dropdown-menu-item" onClick={(e) => logOutUser(e)}>
      <a href="/#">{data}</a>
    </li>
  )
}

export default DropdownMenuItem
