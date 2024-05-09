import { Link } from "react-router-dom"

export default function Menu () {
    return (
        <div>
            <h2>Menu</h2>
            <nav>
                <li><Link to="/">Contacts List</Link></li>
                <li><Link to="/addContact">Add a new contact</Link></li>
            </nav>
        </div>
    )
}