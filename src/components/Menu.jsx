import { Link, useParams } from "react-router-dom";

const Menu = () => {

    const {username} = useParams();
    return (
        <>
            <h1>Menu</h1>
            <div>
            <Link to={`/${username}`}>Contacts List</Link>

            </div>
            <div>
            <Link to={`/${username}/createcontact`}>Add New Contact</Link>
            </div>
        </>
        
    );
}

export default Menu;