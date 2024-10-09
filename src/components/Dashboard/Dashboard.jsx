import { Link } from "react-router-dom";
import './Dashboard.css'


export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <nav>
                <h1 className='Dashboard-name'>MENU</h1>
                <div className='navigation-panel'>
                    <Link to={'/contacts'} className='nav-link'>Contacts</Link>
                    <Link to={'/create'} className='nav-link'>Create</Link>
                    <Link to={'/'} className='nav-link'>Home</Link>
                </div>
            </nav>         
        </div>
    );
}