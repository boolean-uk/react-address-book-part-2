import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <main>
      <h1>Menu</h1>
      <ul>
        <Link to="/contact">Contacts List</Link>
    </ul>
    <ul>
        <Link to="/form"> Add New Contact </Link>
      </ul>
    </main>
  );
};

export default Menu;
