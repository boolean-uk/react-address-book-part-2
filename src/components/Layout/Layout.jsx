import { Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <nav className="main-menu">
                <h2>Menu</h2>
                <ul className="contact-list">
                    <li className={"item active"}>
                        <Link to="/">Contacts</Link>
                    </li>
                    <li className={"item"}>
                        <Link to="/create/">Add New Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className="contacts">{props.children}</main>
        </>
    );
};

export default Layout;
