import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <nav className='menu'>
                <h2>Menu</h2>
                <p className='menu'>
                    <Link to='/'>Home</Link>
                </p>
                <p className='menu'>
                    <Link to='/contacts'>Contacts List</Link>
                </p>
                <p className='menu'>
                    <Link to='/add-new-contact'>Add New Contact</Link>
                </p>
            </nav>
        </div>
    )
}