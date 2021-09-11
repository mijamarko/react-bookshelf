import React, { useState } from 'react'
import { ReactComponent as CloseIcon } from '../icons/close_black_24dp.svg'

const CreateShelf = ({ userShelves, setUserShelves, allShelves, setAllShelves }) => {

  const [isEditing, setIsEditing] = useState(false);

  const createNewShelf = (e) => {
    if(e.key === "Enter" && e.target.value !== ""){
      let newShelf = {
        name: e.target.value,
        id: Math.random(),
        tag: e.target.value.toLowerCase()
      }
      setUserShelves([...userShelves, newShelf]);
      setAllShelves([...allShelves, newShelf])
      setIsEditing(!isEditing);
    }
  }

  return (
    <div className="create-shelf-component">
      {!isEditing ? <span onClick={() => setIsEditing(!isEditing)} >&#43;</span> :
      <> 
      <input type="text" className="create-shelf-input" placeholder="Create a new shelf"
      onKeyPress={(e) => createNewShelf(e)}/>
      <CloseIcon className="create-shelf-icon" onClick={() => setIsEditing(!isEditing)} />
      </>}
    </div>
  )
}

export default CreateShelf
