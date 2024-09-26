import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import ContactPage from './components/ContactPage';
import CreateNewContact from './components/CreateNewContact';
import UpdateContact from './components/UpdateContact';

export default function App() {

    const [contacts, setContacts] = useState([])

    // fetch entire contact list on load and on any updates
    useEffect(() =>{
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact`)
        .then(res => res.json())
        .then(data => setContacts(data))
        .catch(error => console.error('Error fetching data: ', error))
    }, [contacts])

    const handleOnDelete = (id) => {
        // filter out contact with given id
        const filteredContacts = contacts.filter(contact => contact.id !== id)
        setContacts(filteredContacts)

        fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact/${id}`, {method: 'DELETE'}).then(response => {
            if (response.ok){
                //Handle successful deletion
                console.log('Contact deleted successfully.');

            }else{
                // Handle error
                console.error('Failed to delete contact.');
            }
        })
        .catch(error => {
            console.error('Error deleting contact:', error);
          });
    }

    return (
        <div className='App'>
            <header>
                <h1>Contacts</h1>
                <nav>
                    <ul>
                        <li><Link to="/contacts">Contacts List</Link></li>
                        <li><Link to={`/create/${contacts.length+1}`}>Create New Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/contacts" element={<ContactsList contacts={contacts} setContacts={setContacts} onDelete={handleOnDelete}/>}/>
                <Route path="/contacts/:id" element={<ContactPage contacts={contacts}/>}/>
                <Route path="/create/:id" element={<CreateNewContact setContacts={setContacts}/>} />
                <Route path="/update/:id" element={<UpdateContact contacts={contacts} setContacts={setContacts}/>}/>
            </Routes>
        </div>
    );
}
