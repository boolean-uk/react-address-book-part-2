import {Link} from 'react-router-dom'
import './styles.css';

function Menu() {
  return (
    <div className='menu-container'>
    <ul className='menu-list'> 
        <li className='menu-item'>
            <Link to = "/contacts" className='menu-link'>List of Contacts</Link>
        </li>
        <li className='menu-item'>
            <Link to = "/contacts/add" className='menu-link'>Add Contact</Link>
        </li>
    </ul>
    </div>
  )
}

export default Menu 