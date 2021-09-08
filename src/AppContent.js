import React, { useRef } from 'react'
import Sidebar from './Sidebar/Sidebar'

const AppContent = ({ isOpen, setIsOpen }) => {

  const ref = useRef()

  const checkIfClicked = () => {
    if( isOpen && ref.current){
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="content-wrapper" ref={ref} onClick={() => checkIfClicked()} >
      <Sidebar />
    </div>
  )
}

export default AppContent
