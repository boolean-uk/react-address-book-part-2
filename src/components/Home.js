import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='menuLeft'>
            <h1 className='headerLeft'>
                <Link to={'/'}>Menu</Link>
            </h1>
            <nav className='nav'>
                <ul>
                    <li><Link to={'/contact-list'}>Contact List</Link></li>
                    <li><Link to={'/new-contact'}>Add New Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;