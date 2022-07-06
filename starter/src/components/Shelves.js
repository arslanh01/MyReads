import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import { useState, useEffect } from "react";

const Shelves = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooks();
  }, []);
  const handleMove = async (book, shelf) => {
    console.log("handleMove");
    BooksAPI.update(book, shelf);
    setBooks(
      books.map((bk) => {
        if (bk.id === book.id) {
          bk.shelf = shelf;
        }
        return bk;
      })
    );
  };
  const currentlyReadingBooks = books.filter((book) => {
    return book.shelf === "currentlyReading";
  });
  const wantToReadBooks = books.filter((book) => {
    return book.shelf === "wantToRead";
  });
  const readBooks = books.filter((book) => {
    return book.shelf === "read";
  });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading
            currentlyReadngBooks={currentlyReadingBooks}
            onMove={handleMove}
          />
          <WantToRead wantToReadBooks={wantToReadBooks} onMove={handleMove} />
          <Read readBooks={readBooks} onMove={handleMove} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Shelves;
