import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/contacts/create">Create Contact</Link>
    </div>
  );
}
