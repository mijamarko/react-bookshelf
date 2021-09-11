import React, { useRef, useState, useEffect } from 'react'
import CardOutput from './Content/CardOutput'
import ShelfSearch from './Content/ShelfSearch'
import Sidebar from './Sidebar/Sidebar'
import Loading from './Loading'

const AppContent = ({ isOpen, setIsOpen }) => {
  const ref = useRef()
  const checkIfClicked = () => {
    if( isOpen && ref.current){
      setIsOpen(!isOpen);
    }
  }

  const [premadeShelfData, setPremadeShelfData] = useState([
    {
      name: "Sci-Fi",
      tag: "science_fiction",
      id: Math.random() + 1
    },
    {
      name: "Fantasy",
      tag: "fantasy",
      id: Math.random() + 1
    },
    {
      name: "Tech",
      tag: "technology",
      id: Math.random() + 1
    },
    {
      name: "Drama",
      tag: "drama",
      id: Math.random() + 1
    },
    {
      name: "Thriller",
      tag: "thriller",
      id: Math.random() + 1
    },
  ])
  const [userShelfData, setUserShelfData] = useState([]);

  const [selectedShelfIndex, setSelectedShelfIndex] = useState(0);

  const [allShelves, setAllShelves] = useState([...premadeShelfData, ...userShelfData]);

  const [shelfData, setShelfData] = useState(null);

  const [searchValue, setSearchValue] = useState('');

  useEffect((() => {
    fetch(`https://openlibrary.org/subjects/science_fiction.json`)
    .then(response => response.json())
    .then(data => setShelfData(data.works));
  }), [])

  let states = {
    premadeShelfData: premadeShelfData,
    setPremadeShelfData: setPremadeShelfData,
    userShelfData: userShelfData,
    setUserShelfData: setUserShelfData,
    selectedShelfIndex: selectedShelfIndex,
    setSelectedShelfIndex: setSelectedShelfIndex,
    allShelves: allShelves,
    setAllShelves: setAllShelves,
    shelfData: shelfData,
    setShelfData: setShelfData
  }


  return (
    <div className="content-wrapper" ref={ref} onClick={() => checkIfClicked()} >
      <Sidebar stateData={states}/>
      <div className="content-container">
        <ShelfSearch selectedShelfIndex={selectedShelfIndex} allShelves={allShelves} searchValue={searchValue} setSearchValue={setSearchValue}/>
        {shelfData === null? <Loading /> : <CardOutput shelfData={shelfData} searchValue={searchValue}/>}
      </div>
    </div>
  )
}

export default AppContent
