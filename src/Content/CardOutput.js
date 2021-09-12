import React, { useState } from "react"
import BookCard from "./BookCard"
import BookModal from "./BookModal";

const CardOutput = ({ shelfData, searchValue }) => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [bookId, setBookId] = useState('');

 

  let books = shelfData.map((book) => (
    <BookCard
      id={book.key}
      title={book.title}
      authors={book.authors}
      imgLink={book.cover_id}
      rating={(Math.random() * 4 + 1).toFixed(2)}
      setIsModalOpen={setIsModalOpen}
      setBookId={setBookId}
    />));

  return (
    <div className="card-output">
      {/* Prikazuje kartice ciji naslovi ili autori sadrze slova iz search inputa */}
      {books.filter(book => book.props.title.toLowerCase().includes(searchValue) || book.props.author.toLowerCase().includes(searchValue))}
      {/* ovo jos ne radi ali radice */}
      {/* {isModalOpen && <BookModal bookId={bookId} setIsModalOpen={setIsModalOpen} />} */}
    </div>
  )
}

export default CardOutput
