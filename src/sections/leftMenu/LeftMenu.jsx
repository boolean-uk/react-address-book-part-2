import { Link } from "react-router-dom";
import "./LeftMenu.css"

function LeftMenu() {
    return(<div className="leftMenu">
      <h2>Menu</h2>
      <ul className="linkList">
        <li>
          <Link to="/">Contacts List </Link>
        </li>
        <li>
          <Link to="/create">Add New Contact</Link>
        </li>
      </ul>
    </div>)
}

export default LeftMenu