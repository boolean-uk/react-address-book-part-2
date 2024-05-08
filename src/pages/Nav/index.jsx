import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <NavItem to="/">Main</NavItem>
                <NavItem to="/new-contact">Create New Contact</NavItem>
            </ul>
        </nav>
    );
}

function NavItem({ to, children }) {
    return (
        <li>
            <Link to={to}>{children}</Link>
        </li>
    );
}