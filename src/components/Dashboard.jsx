import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <section className="nav-menu-container">
            <nav className="nav-menu">
                <Link to='/contact-list'>
                <h4>Contact List</h4></Link>
                <Link to='/add'>
                <h4>Add New Contact</h4></Link>
            </nav>
        </section>
    )
}