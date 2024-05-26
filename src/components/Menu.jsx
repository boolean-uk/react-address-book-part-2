import { Link } from "react-router-dom"

export default function Menu() {
    return( 
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/log">Contacts</Link>
                </li>
                <li>
                    <Link to="/add-contact">Add New Contact</Link>
                </li>
            </ul>
        </nav>
    )
}