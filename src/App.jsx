import { useEffect, useState } from 'react'
import './App.css'
import { Link, Routes, Route } from "react-router-dom"

import ContactList from './pages/ContactList'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'

function App() {
    const [contacts, setContancts] = useState([])

    useEffect(() => {
        getContacts();
      }, [])

      function getContacts() {
        fetch("https://boolean-api-server.fly.dev/Hjaldrgud/contact")
          .then((response) => response.json())
          .then((data) => setContancts(data))
      }

      console.log(contacts)

    return (
        <>
            <header>
                <h1>Contact list app</h1>
                <nav>
                <ul>
                    <li >
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/addcontact">Add Contact</Link>
                    </li>
                </ul>
                </nav>
            </header>

        <Routes>
            <Route
            path="/"
            element={<ContactList contacts={contacts} />}
            />
            <Route
            path="/addcontact"
            element={<AddContact setContacts={setContancts} />}
            />
                        <Route
            path="/editcontact"
            element={<EditContact setContacts={setContancts} />}
            />
        </Routes>
        </>
    );

}

export default App;
