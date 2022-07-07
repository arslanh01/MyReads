import "../css/App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";

function App() {
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
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Shelves books={books} onMove={handleMove} />}
      />
      <Route
        path="/search"
        element={<SearchBooks books={books} onMove={handleMove} />}
      />
    </Routes>
  );
}

export default App;
