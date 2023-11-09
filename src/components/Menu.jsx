import { Link, } from "react-router-dom"
function Menu() {
    return(
        <div className="menu">
            <h1>Contact List</h1>
            <Link to="/">Contact List</Link> <br />
            <Link to="/form">Add New Contact</Link>
            </div>
    )
}
export default Menu;