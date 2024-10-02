import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="menu">
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts-list/">Contacts List</Link>
        </li>
        <li>
          <Link to="/add-new-contact">Add New Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
