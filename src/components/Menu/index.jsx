import { Link } from 'react-router-dom'
import './style.css'

function Menu() {
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/">Hello, home!</Link></li>
                <li><Link to="/contactlist">Hello, Contact List!</Link></li>
                <li><Link to ="/contact/create">Hello, create contact!</Link></li>
            </ul>
        </nav>
    )
}

export default Menu