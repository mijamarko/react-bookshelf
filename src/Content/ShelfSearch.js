import React from 'react'
import { ReactComponent as SearchIcon } from '../icons/search_black_24dp.svg'



const ShelfSearch = ({ selectedShelfIndex, allShelves, searchValue, setSearchValue }) => {
  let shelf = allShelves[selectedShelfIndex].name;

  const filterBookCards = (e) => {
    let val = e.target.value;
    setSearchValue(val);
  }

  return (
    <div className="shelf-search">
      <input type="text" placeholder={`Search in ${shelf}`}
      onChange={(e) => filterBookCards(e)}/>
      <SearchIcon />
    </div>
  )
}

export default ShelfSearch
