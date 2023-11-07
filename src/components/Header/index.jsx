import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <div>
            <Link to="/">Dashboard</Link>
            <Link to="/new-contact">Create new contact</Link>
            <Link to="/contact-page/1">View first contact</Link>
        </div>
    );
};

export default Header;
