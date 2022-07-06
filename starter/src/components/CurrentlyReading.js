import Book from "./Book";

const CurrentlyReading = ({ currentlyReadngBooks, onMove }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentlyReadngBooks.map((book) => {
            return <Book key={book.id} book={book} onMove={onMove} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
