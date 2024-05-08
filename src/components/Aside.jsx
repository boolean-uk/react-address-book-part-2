import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <nav className="contact-navigation-container">
            <h2>Menu</h2>
            <ul className="aside-ul">
                <li><Link to='/contacts'>Contacts List</Link></li>
                <li><Link to='/form'>Add New Contact</Link></li>
            </ul>
        </nav>
    )
}