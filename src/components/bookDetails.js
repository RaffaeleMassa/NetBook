import React from 'react';
import "../styles/pageDetails.css"

const BookDetails = ({ book }) => {
  const createDescMarkup = description => {
    return { __html: description };
  };

  return (
    <section>
      <div className="Tit">
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3 className="Tit">
            <strong>Title:</strong> {book.volumeInfo.title}
          </h3>
          <p className="Tit">
            <strong>Authors:</strong> {book.volumeInfo.authors}
          </p>
          <p className="Tit">
            <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
          </p>
          <p className="Tit">
            <strong>Publisher:</strong> {book.volumeInfo.publisher}
          </p>
          <p className="Tit">
            <strong>Page Count:</strong> {book.volumeInfo.pageCount}
          </p>
          <div className="Tit"
            dangerouslySetInnerHTML={createDescMarkup(
              book.volumeInfo.description
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default BookDetails;