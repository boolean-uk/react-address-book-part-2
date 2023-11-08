
import { Route, Routes, Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
         <div className="menu">
                <h1>Menu</h1>
                <Link to="/contact-lists" className='link'>Contact Lists</Link>
                <Link to="/create-contact" className='link'>Add a New Contact</Link>
         </div>

        </>
         
    )
}