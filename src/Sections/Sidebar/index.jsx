
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <main className='sidebar'>
        <header className="sidebar-head"> Menu</header>
        <nav className="sidebar-list">
            <ul className="sidebar-list">
                <li className="sidebar-list dashboardL">
                    <Link to={"/"}>Dashboard</Link>
                    <ul>
                    <li>View contact</li>
                    <li>Edit contact</li>
                    </ul>
                </li>
                <li className="sidebar-list addL" >
                    <Link to={"/addNewContact"}>Add New Contact</Link>
                </li>
            </ul>
        </nav>
    </main>
  )
}
