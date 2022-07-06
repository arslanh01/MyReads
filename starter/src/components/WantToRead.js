import Book from "./Book";

const WantToRead = ({ wantToReadBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {wantToReadBooks.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
