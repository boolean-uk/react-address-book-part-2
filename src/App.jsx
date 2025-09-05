import { createContext, useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/Contacts/ContactList';
import {Link, Route, Routes} from 'react-router-dom';
import DetailPage from './components/DetailPage';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';

const ContactContext = createContext(1)

function App() {
  const url = 'https://boolean-uk-api-server.fly.dev/adenholm/contact'

  const [contacts, setContacts] = useState([])

  const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setContacts(jsonData);
    console.log(jsonData)
  };
  
  useEffect(() => {fetchData();}, [])

  const addContact = async (contact) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const newContact = await response.json();
      console.log("Saved:", newContact);
      fetchData()
      return newContact;
  }

  const editContact = async (contact) => {
    const response = await fetch(url + "/" + contact.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const updated = await response.json();
      console.log("Updated:", updated);
      fetchData()
      return updated;
  }

  const deleteContact = async (id) => {
    const response = await fetch(url + "/" + id, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log("Deleted", data);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }


  return (
    <ContactContext.Provider value={{contacts, setContacts, addContact, editContact, deleteContact}}>
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/create">Create new Contact</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ContactList/>} />
          <Route path="/contacts/:id" element={<DetailPage/>}/>
          <Route path="/create" element={<CreateForm/>}/>
          <Route path="/edit/:id" element={<EditForm/>}/>
        </Routes>
      </main>
    </ContactContext.Provider>
  );
}

export { App, ContactContext };
