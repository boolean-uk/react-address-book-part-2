import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | <Link to="/create">Create Contact</Link>
    </nav>
  );
}

export default Navbar;
