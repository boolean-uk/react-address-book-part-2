import './App.css';
import {useEffect, useState} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import ContactsList from './components/ContactsList'
import ContactView from './components/ContactView'
import Form from './components/Form'
import EditForm from './components/EditForm';

function App() {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState(null)

    const getContacts = async () => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/FredrikEH/contact`)
        const data = await response.json()
        setContacts(data)
    }    

    const postContact = async (contact) => {
        console.log('Test App postContact')
        const response = await fetch(
            `https://boolean-uk-api-server.fly.dev/FredrikEH/contact`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(contact)
            }

        )
        const data = await response.json()
        console.log(data)
        getContacts()
    }

    const deleteContact = async (id) => {
        const response = await fetch(
            `https://boolean-uk-api-server.fly.dev/FredrikEH/contact/${id}`,
            {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }
        )
        const data = await response.json()
        console.log(data)
        getContacts()
    }

    const updateContact = async (id, contact) => {
        const response = await fetch(
            `https://boolean-uk-api-server.fly.dev/FredrikEH/contact/${id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(contact)
            }
        )
        const data = await response.json()
        console.log(data)
        getContacts()
    }
    
    useEffect(() => {
        getContacts()
    }, [])

    return (
        <>  
            <header>
                <h1>The Contacts Site</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Form">Add New Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts}/>} />
                <Route path="/contact/:id" element={<ContactView contacts={contacts} contact={contact} setContact={setContact} deleteContact={deleteContact}/>} updateContact={updateContact}/>
                <Route path="/form" element={<Form contact={contact} postContact={postContact} setContact={setContact}/>} />
                <Route path="/editform" element={<EditForm contact={contact} updateContact={updateContact} setContact={setContact}/>} />
            </Routes>
        </>
    );
}

export default App;
