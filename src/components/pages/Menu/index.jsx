import { Routes, Route, Link } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'
import PeopleProvider from '../../../context/PeopleProvider'
import ContactProfile from '../Contacts/ContactProfile'
import CreateContact from '../Contacts/CreateContact'
import EditContact from '../Contacts/EditContact'
import '../CSS/Menu.css'

function Menu() {

    return (
        <div className="menu-layout">
            <div className="menu">
                <header>
                    <h1>Menu</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Contacts List</Link>
                            </li>
                            <li>
                                <Link to="/add">Add New Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div>
                <PeopleProvider>
                    <Routes>
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/view/:id" element={<ContactProfile />} />
                        <Route path="/add" element={<CreateContact />}/>
                        <Route path="/edit/:id" element={<EditContact/> }/>
                    </Routes>
                </PeopleProvider>
            </div>
        </div>
    )
}

export default Menu