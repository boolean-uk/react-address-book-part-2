import { Link } from "react-router-dom";
import add from '../../_assets/add.svg'
import users from '../../_assets/users.svg'

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <Link className="nav-svg-icon" to='/'>
                    <li>
                        <img src={users}></img>
                        <em>Contact List</em>
                    </li>
                </Link>

                <Link className="nav-svg-icon" to='/contact/new'>
                    <li>
                        <img src={add}></img>
                        <em>Add Contact</em>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}