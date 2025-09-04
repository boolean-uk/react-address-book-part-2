import { Link } from "react-router-dom";

function Menu() {
    return (
        <section>
            <h1>Menu</h1>
            <ul>
                <li>
                    <Link to="/contacts">Contacts List</Link>
                </li>
                <li>
                    <Link to="/add-contact">Add New Contact</Link>
                </li>
            </ul>
        </section>
    )
}

export default Menu;