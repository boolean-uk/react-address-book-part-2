import {Link} from 'react-router-dom'

function Menu() {
  return (
    <ul>
        <li>
            <Link to = "/contacts">List of Contacts</Link>
        </li>
        <li>
            <Link to = "/contacts/add">Add Contact</Link>
        </li>
    </ul>
  )
}

export default Menu 