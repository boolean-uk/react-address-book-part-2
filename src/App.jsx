import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';
import ViewContact from './components/ViewContact';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => 
    {
        fetch("https://boolean-api-server.fly.dev/klaand01/contact")
        .then((response) => response.json())
        .then((data) => {
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
        setContacts([...arr])
    }

    const deleteContact = (data) =>
    {
        const arr = contacts.filter((contact) => {if (contact !== data.contact) return contact})
        setContacts(arr)
    }

    const editContact = (data) =>
    {
        const array = contacts.map((contact) =>
        {
            if (contact.id === data.newContact.id) return data.newContact
            return contact
        })
        setContacts(array)
    }

    return (
        <>
        <h1>Menu</h1>
        <Link to={"/contacts"} >Contacts List</Link>
        <Link to={"/newContact"} >Add New Contact</Link>

        <Routes>
            <Route path='/contacts' element={<ContactList contacts={contacts}/>}/>
            <Route path='/contacts/:id' element={<ViewContact contacts={contacts} deleteContact={deleteContact}/>}/>
            <Route path='/editContact/:id' element={<EditContact contacts={contacts} editContact={editContact}/>}/>
            <Route path='/newContact' element={<NewContact addContact={addContact}/>}/>
        </Routes>
        </>
    );
}

export default App;