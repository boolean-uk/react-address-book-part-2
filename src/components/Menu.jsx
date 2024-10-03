import { Link } from "react-router-dom"
function Menu(){
    return(
        <nav className="menu-div">
            <li><Link to={"/"}>Contact List</Link></li>
            
            <li><Link to="/createcontact" >Add New Contact</Link></li>
        </nav>
    )
}

export default Menu