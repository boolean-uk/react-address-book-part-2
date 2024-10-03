import { Link } from "react-router-dom";

export default function LeftMenu() {
  return (
    <nav className="left-menu">
      <ul>
        <li>
          <Link to="/">Contact List</Link>
        </li>
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
