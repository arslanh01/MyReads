import "../css/App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Shelves />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
