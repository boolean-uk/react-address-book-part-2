import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dachboard</Link>
        </li>
        <li>
          <Link to="/createcontact">Create New Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
