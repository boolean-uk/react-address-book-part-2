import './App.css';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';
import ViewContact from './components/ViewContact';
import NewContact from './components/NewContact';
import { Link, Routes, Route } from 'react-router-dom';
import EditContact from './components/EditeContact';



function App() {

   
    const [contacts, setContacts] = useState([])
    const URL = "https://boolean-api-server.fly.dev/malimo326/contact"

    const [contactCreate, setContactCreate] = useState([])
    const [contactUpdate, setContactUpdate] = useState([])
    const [contactDelete, setContactDelete] = useState([])
    
    
    useEffect(() => 
    {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {setContacts(data)})
    }, [])

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

        fetch(URL, postOption)
    }, [contactCreate])


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
        
        fetch(`https://boolean-api-server.fly.dev/malimo326/contact/${contactUpdate.id}`, putOption)
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

        fetch(`https://boolean-api-server.fly.dev/malimo326/contact/${contactDelete.id}`, deleteOption)
    }, [contactDelete])


    const deleteContact = (data) =>
    {
        setContactDelete(data.contact)
        const arr = contacts.filter((contact) => { return contact !== data.contact })
        setContacts(arr)
    }


    const addContact = (data) =>
    {
        let arr = [...contacts]
        const newId = contacts[contacts.length - 1].id + 1
        data.newContact.id = newId
        arr.push(data.newContact)
        setContactCreate(data.newContact)
        setContacts([...arr])
    }
    return (
        <>
        <div className='header'>
        <h1>Address Book</h1>
        <div className='nav'>
        
        <Link to={"/contacts"} >Contacts List</Link>
        <Link to={"/newContact"} >Add New Contact</Link>
        </div>
        </div>
        

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
