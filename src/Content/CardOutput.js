import React from "react"
import BookCard from "./BookCard"

const CardOutput = ({ shelfData, searchValue }) => {

  let books = shelfData.map((work) => (
    <BookCard
      id={work.key}
      title={work.title}
      author={work.authors[0].name}
      imgLink={work.cover_id}
      rating={(Math.random() * 4 + 1).toFixed(2)}
    />));

  return (
    <div className="card-output">
      {books.filter(book => book.props.title.toLowerCase().includes(searchValue))}
    </div>
  )
}

export default CardOutput
