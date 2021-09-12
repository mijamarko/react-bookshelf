import React from 'react'

const BookCard = ({title, authors, rating, imgLink, setIsModalOpen, setModalData}) => {

  const openModal = () => {
    console.log(title, authors)
  }

  return (
    <div className="book-card" onClick={() => openModal()}>
      <div className="book-image">
        <img alt="book-cover" src={ imgLink ? `http://covers.openlibrary.org/b/id/${imgLink}-S.jpg` : `https://via.placeholder.com/75x75.jpg?text=No+cover+for+this+book`}></img>
      </div>
      <div className="book-info">
        <p>{title}</p>
        <p>{authors[0].name}</p>
      </div>
      <div className="book-rating">
        <span>{rating}</span>
        <span className="book-card-options">...</span>
      </div>
    </div>
  )
}

export default BookCard
