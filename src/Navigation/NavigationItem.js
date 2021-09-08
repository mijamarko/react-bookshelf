import React from 'react'

const NavigationItem = ({classes, data, isOpen, setIsOpen}) => {

  let itemClass = classes.join(" ");

  const toggleDropdownMenu = (e) => {
    e.preventDefault();
    if(setIsOpen){
      setIsOpen(!isOpen);
    }
  }

  return (
    <li className={itemClass} onClick={(e) => toggleDropdownMenu(e)}>
      <a href="/#">
        {data}
      </a>
    </li>
  )
}

export default NavigationItem