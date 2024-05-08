import { Link } from "react-router-dom";

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Contacts List</li>
                </Link>

                <Link to='/contact/new'>
                    <li>Add New Contact</li>
                </Link>
            </ul>
        </nav>
    )
}