import { Link } from "react-router-dom";

export default function LeftMenu() {
  return (
    <nav>
      <Link to={"/"}> Contact List </Link>
      <Link to={"/create-contact"}>Add New Contact</Link>
    </nav>
  );
}
