import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';
import ViewContact from './components/ViewContact';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

function App() {
    const INITIAL_CONTACT =
    {
        firstName: undefined,
        lastName: undefined,
        street: undefined,
        city: undefined
    }
    const [contacts, setContacts] = useState([])
    const [contactCreate, setContactCreate] = useState(INITIAL_CONTACT)
    const [contactUpdate, setContactUpdate] = useState(INITIAL_CONTACT)
    const [contactDelete, setContactDelete] = useState(INITIAL_CONTACT)

    // GET the initial contacts
    useEffect(() => 
    {
        fetch("https://boolean-api-server.fly.dev/klaand01/contact")
        .then((response) => response.json())
        .then((data) => {setContacts(data)})
    }, [])
    
    // CREATE the specified contact
    useEffect(() =>
    {
        const postOption =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactCreate)
        }
        
        fetch("https://boolean-api-server.fly.dev/klaand01/contact", postOption)
    }, [contactCreate])

    const addContact = (data) =>
    {
        let arr = [...contacts]
        const newId = contacts[contacts.length - 1].id + 1

        data.newContact.id = newId
        arr.push(data.newContact)
        setContactCreate(data.newContact)
        setContacts([...arr])
    }

    // UPDATE the specified contact
    useEffect(() =>
    {
        const putOption =
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactUpdate)
        }
        
        fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${contactUpdate.id}`, putOption)
    }, [contactUpdate])

    const editContact = (data) =>
    {
        const array = contacts.map((contact) =>
        {
            if (contact.id === data.newContact.id) return data.newContact
            return contact
        })
        setContacts(array)
        setContactUpdate(data.newContact)
    }
    
    // DELETE the specified contact
    useEffect(() =>
    {
        const deleteOption =
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactDelete)
        }

        fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${contactDelete.id}`, deleteOption)
    }, [contactDelete])

    const deleteContact = (data) =>
    {
        setContactDelete(data.contact)
        const arr = contacts.filter((contact) => { return contact !== data.contact })
        setContacts(arr)
    }

    return (
    <>
        <div id='menu'>
            <h1 >Menu</h1>
            <ul >
                <li>
                    <Link to={"/contacts"} >Contacts List</Link>
                </li>
                <li>
                    <Link to={"/newContact"} >Add New Contact</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/contacts' element={<ContactList contacts={contacts}/>}/>
                <Route path='/contacts/:id' element={<ViewContact contacts={contacts} deleteContact={deleteContact}/>}/>
                <Route path='/editContact/:id' element={<EditContact contacts={contacts} editContact={editContact}/>}/>
                <Route path='/newContact' element={<NewContact addContact={addContact}/>}/>
            </Routes>
        </div>
    </>
    );
}

export default App;