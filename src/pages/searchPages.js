import React, {useState} from "react";
import axios from "axios";
import BookSearch from "../components/booksearch"
import BookList from "../components/bookslist"
import Loader from "../components/loader"


function SearchPage() {
    const [searchBook, setSearchBook] = useState("")
    const API_URL= "https://www.googleapis.com/books/v1/volumes?q=<searchBook>"
    const [books, setBooks] = useState({ items: [] });
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
  const  handleChange = (e) => {
     setSearchBook(e.target.value);
  }
  
  const callApi = async () =>{
    setLoading(false);
    setError(false);
    try {
    const result = await axios.get(`${API_URL}?q=${searchBook}`)
    setBooks(result.data);
  }
  catch(error) {
    setError(true);
  
  }
  setLoading(false);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    callApi()
  }
    return (
      
     <>
     <div>
     <h1 className="Title">NeTBooK</h1>
     <h2 className="par">Find your Book</h2>
     </div>
     <BookSearch 
     handleChange={handleChange}
     handleSubmit={handleSubmit}
     searchBook={searchBook}
     error={error}
      />
     <Loader searchBook={searchBook} loading={loading} />
     <BookList books={books} />
  
     </>
    );
  }
  
  export default SearchPage;