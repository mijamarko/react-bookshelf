import React from "react"
import BookCard from "./BookCard"

const CardOutput = ({ shelfData }) => {

  return (
    <div className="card-output">
      {console.log(shelfData)}
      {shelfData &&
        shelfData.map((work) => (
          <BookCard
            id={work.key}
            title={work.title}
            author={work.authors[0].name}
            imgLink={work.cover_id}
            rating={(Math.random() * 4 + 1).toFixed(2)}
          />
        ))}
    </div>
  )
}

export default CardOutput
