import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="main-layout">
      <header>
        <h1> Menu</h1>
        <ul className="main-menu">
          <li>
            <Link to="/">Contacts List</Link>
          </li>
          <li>
            <Link to="/add-contact">Add New Contact</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
