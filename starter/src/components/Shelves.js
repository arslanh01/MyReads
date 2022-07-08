import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link } from "react-router-dom";

const Shelves = ({ books, onMove }) => {
  // separate out currently reading books
  const currentlyReadingBooks = books.filter((book) => {
    return book.shelf === "currentlyReading";
  });

  // separate out want to read books
  const wantToReadBooks = books.filter((book) => {
    return book.shelf === "wantToRead";
  });

  // separate out read books
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
            onMove={onMove}
          />
          <WantToRead wantToReadBooks={wantToReadBooks} onMove={onMove} />
          <Read readBooks={readBooks} onMove={onMove} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Shelves;
