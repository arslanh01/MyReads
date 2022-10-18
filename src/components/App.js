import "../css/App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import NotFound from "./NotFound";

function App() {
  // define books using useState hook
  const [books, setBooks] = useState([]);

  // get books using useEffect hook
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  // handle move between shelves
  const handleMove = async (book, shelf, oldShelf) => {
    // add a new book to the collection
    if (oldShelf === "none") {
      book.shelf = shelf;
      setBooks(books.concat(book));
      BooksAPI.update(book, shelf);
    }
    // move a book which is already in the collecton
    else {
      BooksAPI.update(book, shelf);
      setBooks(
        books.map((bk) => {
          if (bk.id === book.id) {
            bk.shelf = shelf;
          }
          return bk;
        })
      );
    }
  };
  return (
    <Routes>
      <Route
        exact
        path="MyReads/"
        element={<Shelves books={books} onMove={handleMove} />}
      />
      <Route
        path="MyReads/search"
        element={<SearchBooks books={books} onMove={handleMove} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
