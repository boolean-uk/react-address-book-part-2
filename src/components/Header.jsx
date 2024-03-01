import { Link } from "react-router-dom";

function Header({ searchContacts }) {
  return (
    <div className="parent">
      <header>
        <h2>MENU</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Contacts List</Link>
            </li>
            <li>
              <Link to="/create">Add New Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <input
            className="search-bar"
            placeholder="Search contact"
            onChange={(e) => searchContacts(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
