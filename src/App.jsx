import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';
import ViewContact from './components/ViewContact';
import NewContact from './components/NewContact';

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => 
    {
        fetch("https://boolean-api-server.fly.dev/klaand01/contact")
        .then((response) => response.json())
        .then((data) => {
            console.log("DATA", data)
            let arr = []

            for (let i = 0; i < data.length; i++)
            {
                const obj = {
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    street: data[i].street,
                    city: data[i].city,
                    id: data[i].id
                }
                arr.push(obj)
            }
            setContacts(arr)
        })
    }, [])

    const addContact = (data) =>
    {
        let arr = [...contacts]
        const newId = contacts[contacts.length - 1].id + 1
        data.newContact.id = newId
        arr.push(data.newContact)
        
        console.log("NEW CONTACT", arr)
        setContacts([...arr])
    }

    return (
        <>
        <h1>Menu</h1>
        <Link to={"/contacts"} >Contacts List</Link>
        <Link to={"/newContact"} >Add New Contact</Link>

        <Routes>
            <Route path='/contacts' element={<ContactList contacts={contacts}/>}/>
            <Route path='/contacts/:id' element={<ViewContact contacts={contacts}/>}/>
            <Route path='/newContact' element={<NewContact addContact={addContact}/>}/>
        </Routes>
        </>
    );
}

export default App;