import "./AppNavigation.css";
import { useLocation, Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

function AppNavigation() {
  const { contacts } = useContext(UserContext);
  let location = useLocation();
  return (
    <nav className="app-navigation">
      <Link
        to="/"
        className={
          location.pathname !== "/contacts/new/" ? "link active" : "link"
        }
      >
        {`Contacts (${contacts.length})`}
      </Link>
      <Link
        to="/contacts/new/"
        className={
          location.pathname === "/contacts/new/" ? "link active" : "link"
        }
      >
        Add Contact
      </Link>
    </nav>
  );
}

export default AppNavigation;
