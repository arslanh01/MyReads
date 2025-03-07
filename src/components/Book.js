const Book = ({ book, onMove }) => {
  // handle move when a new shelf is selected
  const handleChange = (event) => {
    onMove(book, event.target.value, book.shelf);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks ? (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            ></div>
          ) : (
            ""
          )}
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        {book.title ? <div className="book-title">{book.title}</div> : ""}
        {/* handling authors if more than one */}
        {book.authors
          ? book.authors.map((author) => {
              return (
                <div key={author} className="book-authors">
                  {author}
                </div>
              );
            })
          : ""}
      </div>
    </li>
  );
};

export default Book;
