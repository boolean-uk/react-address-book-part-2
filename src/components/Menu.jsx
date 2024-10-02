import { Link } from "react-router-dom";

function Menu() {
    return (
        <section className="menu">
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Contacts List</Link>
                    </li>
                    <li>
                        <Link to="/add">Add New Contact</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Menu