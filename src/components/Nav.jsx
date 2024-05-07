import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
        <h2>Menu</h2>
        <Link to='/contact-list'>Contacts List</Link>
        <Link to='/add-new-contact'>Add New Contact</Link>
        </nav>
    )
}