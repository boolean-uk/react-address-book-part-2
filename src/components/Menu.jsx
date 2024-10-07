import { Link } from "react-router-dom"


export default function Menu() {


    return ( 
        
            <nav className="menu">
            <h2 className='menu-header'>Menu</h2>
    
            <ul>
                <li><Link to="/contacts">Contacts List</Link></li>
                <li><Link to="/contactadd">Add New Contact</Link></li>
                
                
            </ul>
    
            </nav>
    

    )

}