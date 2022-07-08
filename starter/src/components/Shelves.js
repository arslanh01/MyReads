import Book from "./Book";
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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReadingBooks.map((book) => {
                  return <Book key={book.id} book={book} onMove={onMove} />;
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToReadBooks.map((book) => {
                  return <Book key={book.id} book={book} onMove={onMove} />;
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {readBooks.map((book) => {
                  return <Book key={book.id} book={book} onMove={onMove} />;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Shelves;
