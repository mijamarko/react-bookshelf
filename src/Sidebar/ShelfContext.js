import React, { createContext, useState } from 'react'

export const ShelfContext = createContext();

export const ShelfProvider = ({ children }) => {

  const [premadeShelves, setPremadeShelves] = useState([
    "Sci-Fi",
    "Fantasy",
    "Tech",
    "Drama",
    "Thriller",
  ])
  const [userShelves, setUserShelves] = useState([]);

  const [selectedShelfIndex, setSelectedShelfIndex] = useState(0);

  const [allShelves, setAllShelves] = useState([...premadeShelves, ...userShelves]);

  let value = {
    pShelves: [premadeShelves, setPremadeShelves],
    uShelves: [userShelves, setUserShelves],
    selectedShelf: [selectedShelfIndex, setSelectedShelfIndex],
    aShelves: [allShelves, setAllShelves]
  }

  return (
    <ShelfContext.Provider value={value}>
      { children }
    </ShelfContext.Provider>
  )

}