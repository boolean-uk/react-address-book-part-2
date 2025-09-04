import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
        <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts/add">Create Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;