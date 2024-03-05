import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <nav className="ab-menu">
      <h1>Menu</h1>
      <Link to={"/"}>Contacts List</Link>
      <Link to={"/contact-form"}>Add New Contact</Link>
    </nav>
  );
}
