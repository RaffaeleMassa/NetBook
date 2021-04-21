import React from "react"
import {Link} from "react-router-dom"



const Book = ({book}) =>{
    
     
    return(
        <>
              <li>
                <div className="Tit">
                 <img 
                
                 alt={`${book.volumeInfo.title} book`} 
                 src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                <div>
                 <h3 className="Tit">{book.volumeInfo.title}</h3>
                 <p className="Tit">{book.volumeInfo.publishedDate}</p>
                 <Link className="Tit" to={`/book/${book.id}`}>Show details</Link>
               </div>
               </div>
               <hr />

               
              </li>
            
         </>
            )
    }

    const BookList = ({books}) =>{
        return(
            <ul>
                {books.items.map((book,item)=>{
                    return <Book book ={book} key={item} />
                })}
            </ul>
        )
    }
export default BookList;