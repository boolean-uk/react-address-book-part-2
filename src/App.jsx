import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import ContactList from './components/ContactList'
import AddContacts from "./components/AddContacts"
import ViewContacts from "./components/ViewContacts"

export default function App() {

    return (
        <>
          <nav>
          <div className="menu-container">
            <h2>Menu</h2>
              <ul className='home-list'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Contact/List"><li>Contacts List</li></Link>
                <Link to="/contacts/add"><li>Add New Contact</li></Link>
              </ul>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/Contact/List" element={<ContactList />}></Route>
              <Route path="/contacts/add" element={<AddContacts/>}></Route>
              <Route path="/contacts/:id" element={<ViewContacts />}></Route>
            </Routes>
          </main>
        </>
      )
    }
