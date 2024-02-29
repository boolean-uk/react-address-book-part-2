import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/contacts/create">Create contact</Link>
      </ul>
    </nav>
  );
};
