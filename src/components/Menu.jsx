import { Link } from "react-router-dom"



export default function Menu() {
    return (
        <div className="menu" >
            <nav className="menu"  >
                <h2>Menu</h2>
                <p className="menu" >
                <Link to='/' style={{ color: 'rgb(99, 202, 20)', textDecoration: 'none' }} >Home</Link>
                </p>
                <p className="menu" >
                <Link to='/ContactsList' style={{ color: 'rgb(99, 202, 20)', textDecoration: 'none' }} >Contacts List</Link>
                </p>
            </nav>
        </div>
	)
}
