import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const Shelves = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading />
          <WantToRead />
          <Read />
        </div>
      </div>
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  );
};

export default Shelves;
