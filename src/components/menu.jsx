import { Link } from 'react-router-dom'
import './menu.css'

function menu() {
  return (
    <>
            <h1>Menu</h1>
            <nav>
              <li> 
                <div className='contacts-link'>
                <Link to="/contacts" >Contacts</Link>
                </div>
                <div className='add-contact-link'>
                <Link to="/newcontact" >Add contact</Link>
                </div>
              </li>  
            </nav>
    </>
  )
}

export default menu