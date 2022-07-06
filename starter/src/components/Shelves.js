import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link } from "react-router-dom";

const Shelves = ({ books }) => {
  let currentlyReadingBooks = books.filter((book) => {
    return book.shelf === "currentlyReading";
  });
  let wantToReadBooks = books.filter((book) => {
    return book.shelf === "wantToRead";
  });
  let readBooks = books.filter((book) => {
    return book.shelf === "read";
  });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading currentlyReadngBooks={currentlyReadingBooks} />
          <WantToRead wantToReadBooks={wantToReadBooks} />
          <Read readBooks={readBooks} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Shelves;
