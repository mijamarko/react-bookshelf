import React from 'react'
import { ReactComponent as SearchIcon } from '../icons/search_black_24dp.svg'



const ShelfSearch = ({ selectedShelfIndex, allShelves }) => {
  let shelf = allShelves[selectedShelfIndex].name;

  const filterBookCards = (e) => {

    

  }

  return (
    <div className="shelf-search">
      <input type="text" placeholder={`Search in ${shelf}`}
      onKeyPress={(e) => filterBookCards(e)}/>
      <SearchIcon />
    </div>
  )
}

export default ShelfSearch
