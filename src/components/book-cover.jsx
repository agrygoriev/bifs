import React from "react";
import bookCoverImage from "../assets/img/50-personal-habits.png";

const BookCover = props => {
  return (
    <div className="pix-content pix-cover">
      <img
        className="book-cover"
        src={bookCoverImage}
        alt="50 personal habits"
      />
    </div>
  );
};

export default BookCover;
