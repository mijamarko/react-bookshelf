import React from 'react'

const BookCard = ({title, author, rating, imgLink}) => {
  return (
    <div className="book-card">
      <div className="book-image">
        <img alt="book-cover" src={ imgLink ? `http://covers.openlibrary.org/b/id/${imgLink}-S.jpg` : `https://via.placeholder.com/75x75.jpg?text=No+cover+for+this+book`}></img>
      </div>
      <div className="book-info">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <div className="book-rating">
        <span>{rating}</span>
        <span className="book-card-options">...</span>
      </div>
    </div>
  )
}

export default BookCard
