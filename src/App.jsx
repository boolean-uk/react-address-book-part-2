import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactDetails from './components/ContactDetails';
import ContactList from './components/ContactList';
import Menu from './components/Menu';
import CreateContact from './CreateContact';

function App() {
    let [contacts, setContacts] = useState([])
    useEffect(() => {
        // console.log("loading contacts")
        fetch("https://boolean-uk-api-server.fly.dev/Alistair1080/contact")
            .then(res => res.json())
            .then(data => {
                contacts = []
                data.forEach((contactDetails) => {
                    // console.log(contactDetails)
                    const contact = {}
                    contact.firstName = contactDetails.firstName
                    contact.lastName = contactDetails.lastName
                    contact.street = contactDetails.street
                    contact.city = contactDetails.city
                    contact.id = contactDetails.id

                    // console.log(contact)
                    contacts.push(contact)

                })
                // console.log("after for each", contacts)
                setContacts([...contacts])
            })
    }, [])
    return (
        <div className='divContainer'>
            <Menu />
            <Routes>
                <Route path="/" element={<ContactList contacts={contacts}/>} />
                <Route path="/addContact" element={<CreateContact contacts={contacts} setContacts={setContacts} />} />
                <Route path="/contacts/:id" element={<ContactDetails contacts={contacts}/>}/>
            </Routes>
        </div>
    );
}

export default App;
