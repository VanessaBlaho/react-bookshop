import { useEffect, useState} from "react"

export default function Booklist(){
    const [books, setBooks] = useState([ ]);

    const loadBookList = async () => {
        const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php')
     const data = await response.json();
     setBooks(data);
    }
    useEffect (()=> {
        loadBookList();
    }, []);

    return(
        <div className="booklist">
        <h2>Latest Books</h2>
        <ul>
            {books.map((book)=> (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
        </div>
    );
}