import { Link } from "react-router-dom";
import add from '../../_assets/add.svg'
import users from '../../_assets/users.svg'

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li><img src={users}></img></li>
                </Link>

                <Link to='/contact/new'>
                    <li><img src={add}></img></li>
                </Link>
            </ul>
        </nav>
    )
}