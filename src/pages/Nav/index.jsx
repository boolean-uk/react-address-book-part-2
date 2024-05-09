import { Link } from "react-router-dom"

export default function Nav() {
   return( <nav className="nav">
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/create-contact">Create New Contact</Link>
            </li>
        </ul>
    </nav>)
}
