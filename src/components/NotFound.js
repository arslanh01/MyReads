import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">Go back to home</Link>
      <h3>Oops! Looks like the page doesn't exist.</h3>
    </div>
  );
};

export default NotFound;
