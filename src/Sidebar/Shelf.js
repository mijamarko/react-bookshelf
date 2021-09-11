import React, { useState } from 'react'
import { ReactComponent as DeleteIcon} from '../icons/delete_black_24dp.svg'
import { ReactComponent as EditIcon } from '../icons/edit_black_24dp.svg'
import { ReactComponent as CloseIcon } from '../icons/close_black_24dp.svg'



const Shelf = ({ name, tag,  _, index, selectedShelfIndex, setSelectedShelfIndex, shelves, setShelves, allShelves, setAllShelves, setShelfData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const getBookData = (val) => {
    setShelfData(null);
    fetch(`https://openlibrary.org/subjects/${val}.json`)
    .then(response => response.json())
    .then(data => setShelfData(data.works));
  }

  const changeShelfName = (e) => {
    if(e.key === "Enter" && e.target.value !== "" && e.target.value !== name){
    setIsEditing(!isEditing)
    // postavi stanje setShelves tako da je ime datog shelfa izmenjeno
    setShelves(shelves.map(shelf => {
          if(shelf === name){
            return e.target.value;
          }
          return shelf;
        }))
  }
}

  const deleteShelf = () => {
    //isfiltriraj obrisan shelf iz shelf state-a
    setShelves(shelves.filter(shelf => shelf.name !== name));
    setAllShelves(shelves.filter(shelf => shelf.name !== name));
    setSelectedShelfIndex(0);
  }

  const selectShelf = (e) => {
      setSelectedShelfIndex(index)
      getBookData(tag)
  }

  return (
    <div className={`shelf ${(index === selectedShelfIndex) ? "selected" : ""}`} onClick={selectShelf}>
    {!isEditing ?
     <>
      <span>{name}</span>
      <EditIcon className="shelf-icon" onClick={() => setIsEditing(!isEditing)} />
      <DeleteIcon className="shelf-icon" onClick={() => deleteShelf()} />
     </>
     :<>
     <input type="text" defaultValue={name} className="shelf-edit-input"
     onKeyPress={(e) => changeShelfName(e)} />
     <CloseIcon className="shelf-icon" onClick={() => setIsEditing(!isEditing)}/>
     </>}
      
    </div>
  )
}

export default Shelf
