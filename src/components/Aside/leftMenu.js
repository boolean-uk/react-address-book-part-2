import { Link } from "react-router-dom"

function Menu() {
    
    return (
    <nav className="menu-nav">
    <h1 className="menu-heading">Menu</h1>
    <ul className="menu-links">
    <li><Link to="/contacts">Contacts</Link></li>
    <li><Link to="/createcontact">Create Contact</Link></li>
    </ul>
    </nav>
    )
}

export default Menu