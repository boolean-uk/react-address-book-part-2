import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './page/Menu';
import CreateContact from './page/CreateContact';
import Contacts from './page/Contacts';
import './App.css'
import Contact from './page/Contact';

function App() {
    const [contacts, setContacts] = useState ([])

    function CreateContactsFromRandomUser(users) {
        let newContacts = users.map((person) => {
            return {
                firstName: person.firstName,
                lastName: person.lastName,
                street: person.street,
                city: person.city
            };
        });
        setContacts(newContacts)
        console.log(newContacts)
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://boolean-api-server.fly.dev/KonWritesCode/contact')
          const data = await response.json()
          CreateContactsFromRandomUser(data)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
      fetchData()
    }, [] )

    return (
        <Router>
          <div className="app-container">
            <Menu />
        
            <Routes>
              <Route path="/" exact element={<Contacts contacts={contacts}/>} />
              <Route path="/contacts" element={<Contacts contacts={contacts}/>} />
              <Route path="/contacts/:id" element={<Contact contacts={contacts}/>} />
              <Route path="/contacts/form" element={<CreateContact setContacts={setContacts}/>}/>
            </Routes>
          </div>
        </Router>
    )
}

export default App;
