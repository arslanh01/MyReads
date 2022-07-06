const Book = ({ book, onMove }) => {
  console.log(book);
  const handleChange = (event) => {
    console.log(event.target.value);
    onMove(book, event.target.value);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange}>
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
        <div className="book-title">{book.title}</div>
        {book.authors.map((author) => {
          return (
            <div key={author} className="book-authors">
              {author}
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default Book;
