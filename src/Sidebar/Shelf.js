import React, { useState } from 'react'
import { ReactComponent as DeleteIcon} from '../icons/delete_black_24dp.svg'
import { ReactComponent as EditIcon } from '../icons/edit_black_24dp.svg'
import { ReactComponent as CloseIcon } from '../icons/close_black_24dp.svg'

const Shelf = ({ name, _, index, selectedShelfIndex, setSelectedShelfIndex, shelves, setShelves }) => {
  const [isEditing, setIsEditing] = useState(false);

  const changeShelfName = (e) => {
    if(e.key === "Enter" && e.target.value !== "" && e.target.value !== name){
      let newShelves = shelves.map(shelf => {
        if(shelf === name){
          return e.target.value;
        }
        return shelf;
      })
      setIsEditing(!isEditing);
      setShelves(newShelves);
    }
  }

  const deleteShelf = () => {
    setShelves(shelves.filter(shelf => shelf !== name));
  }

  return (
    <div className={`shelf ${(index === selectedShelfIndex) ? "selected" : ""}`} 
         onClick={() => setSelectedShelfIndex(index)}>
    {!isEditing ?
     <>
      <span>{name}</span>
      <EditIcon className="shelf-icon" onClick={() => setIsEditing(!isEditing)} />
      <DeleteIcon className="shelf-icon" onClick={deleteShelf} />
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
