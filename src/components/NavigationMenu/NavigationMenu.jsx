import { Link } from "react-router-dom";
import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <div className="Navigation-Menu">
      <h3>Navigation Menu</h3>
      <div className="Link-List">
        <Link className="Navigation-Link" to="/contacts">
          Contacts
        </Link>
        <Link className="Navigation-Link" to="/AddContact">
          Add Contact
        </Link>
      </div>
    </div>
  );
}

export default NavigationMenu;
