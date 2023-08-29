import { Link } from "react-router-dom"


function Nav() {
    return (
        <div className='menu-screen-left'>
            <h1 className='header-sections-left'>
                Menu
            </h1>
            <nav className='nav-container'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact-list'}>Contact List</Link></li>
                    <li><Link to={'/new-contact'}>Add New Contact</Link></li>
                </ul>
            </nav>
        </div >
    )
}
export default Nav