import Book from "./Book";

const Read = ({ readBooks, onMove }) => {
  return (
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
  );
};

export default Read;
