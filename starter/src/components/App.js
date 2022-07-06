import "../css/App.css";
import { useState, useEffect } from "react";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Shelves books={books} />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
