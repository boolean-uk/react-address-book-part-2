import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Contacts List</Link>
        </li>
        <li>
          <Link to="/create">Add New Nontact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
