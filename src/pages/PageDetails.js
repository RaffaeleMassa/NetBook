import React, {useState,useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import BookDetails from "../components/bookDetails"
import "../styles/pageDetails.css"
const Details = ({match}) => {
  const  {
      params : {bookId}
  }=match;

  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_URL = `https://www.googleapis.com/books/v1/volumes`;
    const apiBook = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    
    apiBook();
  }, [bookId]);

  return (
    <>
      <Link className="Tit" to={`/`}>Go back to search books</Link>
      {loading && (
        <div style={{ color: `green` }}>
          loading book details for book ID: <strong>{bookId}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: `red` }}>
          some error occurred.
        </div>
      )}
      {book && <BookDetails book={book} />}
    </>
  );
};


export default Details;