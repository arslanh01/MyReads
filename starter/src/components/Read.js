import Book from "./Book";

const Read = ({ readBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{readBooks}</ol>
      </div>
    </div>
  );
};

export default Read;
