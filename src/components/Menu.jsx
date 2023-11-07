import { Link } from "react-router-dom";
import Header from "./Header";

function Menu() {

    return (
        <>
        <div className="menu-container">
            <Header/>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/Contacts">Contacts List</Link>
                    </li>

                    <li>
                        <Link to="/AddContact">Add new contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default Menu;