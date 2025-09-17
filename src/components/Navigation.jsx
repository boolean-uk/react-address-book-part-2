import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div>
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/">Contact List</Link>
                </li>
                <li>
                    <Link to="/addcontact">Add New Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;