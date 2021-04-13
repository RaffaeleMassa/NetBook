import React from "react"
import "../styles/searchBar.css"


const BookSearch = ({
handleSubmit,
searchBook,
handleChange,
error,
}) => {
    return(
        <>
        <form className="searchForm" onSubmit={handleSubmit}>
        <input 
        type="search" 
        className="searchBar" 
        placeholder="Search for Books" name="search" 
        value={searchBook} onChange={handleChange}
        required
        />
        <button type="submit" className="searchBtn" >SEARCH</button>
        {
          error && <div style={{color:'red'}}> Some error occurred</div>
        }
        
        </form>
    </>
    )
}

export default BookSearch;