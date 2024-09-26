import { Link } from 'react-router-dom'
import './style.css'

function Menu() {
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/contactlist">Contact List!</Link></li>
                <li><Link to ="/contact/create">Create contact</Link></li>
            </ul>
        </nav>
    )
}

export default Menu