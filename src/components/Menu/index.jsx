import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <h3>Menu</h3>
            <Link to="/">All contacts</Link><br></br>
            <Link to="/create">Add new contact</Link>
        </div>
    );
}

export default Menu;