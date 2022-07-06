import "../css/App.css";
import { useState } from "react";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">{showSearchPage ? <SearchBooks /> : <Shelves />}</div>
  );
}

export default App;
