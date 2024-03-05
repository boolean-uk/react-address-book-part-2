import { Link } from 'react-router-dom'

export default function SideMenu() {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/create_contact'>Create New Contact</Link></li>
            </ul>
        </div>
    )
}