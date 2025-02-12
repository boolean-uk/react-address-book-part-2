import { Link } from "react-router-dom";

function Header(){


    return (

        <>
        
            <header className='header'>
                <h1 className='header-title'>Address book</h1>
                <nav>
                    <ul>
                        <li className='menu-item'>
                            <Link to="/">Contact List</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/create/new-contact">Create a Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        
        </>

    )

}


export default Header