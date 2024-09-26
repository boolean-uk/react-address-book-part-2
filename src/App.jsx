import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreateContact from './pages/CreateContact';
import ContactList from './pages/ContactList';
import ViewContact from './pages/ViewContact';
import EditContactForm from './pages/CreateContact/components/EditContactForm';

export default function App() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() =>{
        // Fetch contacts data from API
        fetch('https://boolean-api-server.fly.dev/santhia97/contact')
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(error => console.error('Error fetching data:', error));
    
      }, [contacts]);

      //Delete contact
      const handleDeleteContact = (id) => {
        // should call delete api
        // Filter out the contact with the given id
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        
        //Making an API request to delete the contact from the server
        fetch(`https://boolean-api-server.fly.dev/santhia97/contact/${id}`, {method: 'DELETE'}).then(response => {
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

      //Update Contact


  
    return (
      <div className='App'>
        <header>
          <h1>Create Contact</h1>
          <nav>
            <ul>
              <li>
                <Link to="/create-contact">Create Contact</Link>
              </li>
              <li>
                <Link to="/contact-list">Contact List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="/create-contact" element={<CreateContact setContacts={setContacts}/>} 
        />
        <Route path="/contact-list" element={<ContactList contacts={contacts} onDelete={handleDeleteContact} />}
         />
        <Route path="/view-contact/:id" element={<ViewContact contacts={contacts} />} 
        />
        <Route path="/edit/:id" element={<EditContactForm contacts={contacts} setContacts={setContacts} />}
        />
        </Routes>
      </div>
    )
  }
  