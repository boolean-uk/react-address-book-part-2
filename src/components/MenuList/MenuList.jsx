import "./MenuList.css"
import { Link } from 'react-router-dom'

const MenuList = () => {
    return (
        <div className="menu-container">
            <div className="title">Menu list</div>
            <div className="link-container">
                <Link to="/">My Contacts</Link>
            </div>
            <div className="link-container">
                <Link to="/contacts/new">Create new contact</Link>
            </div>
        </div>
    )
}

export default MenuList