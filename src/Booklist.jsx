import { useEffect, useState} from "react"


export default function Booklist(){
    const [books, setBooks] = useState([ ]);

    const loadBookList = async () => {
        const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page='+ page)
     const data = await response.json();
     console.log(data);
     setBooks(data);
    }

    const [page,setPage]= useState(1);
    useEffect (()=> {
        loadBookList();
    }, [page]);

    return(
        <div className="booklist">
        <h2>Latest Books</h2>
        <ul>
            {books.map((book)=> (
                <li key={book.id}>{book.title}
                <p key ={book.id}>{book.author}</p>
                </li>
                
            ))}
        </ul>
        <br/>
        Current Page :{page}
        <br/>
        <button className="pagination"
        onClick={()=>{
            setPage(page - 1);
        }}
        >
            Previous Page
        </button>
        <button className="pagination"
        onClick={()=>{
            setPage(Number(page)+1);
        }}
        >
            Next Page
        </button>
        </div>
    );
}