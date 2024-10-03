import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { createContext, useEffect, useState } from 'react';
import { CreateForm } from './components/CreateForm';
import { Layout } from './components/Layout';
import { ProfileView } from './components/ProfileView';

const ContactContext = createContext();

function App() {
    const [contact, setContact] = useState(null);
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/tuvaea/contact`
        );
        const data = await response.json();
        console.log(data);
        setContacts(data);
      }
    
      useEffect(() => {
        fetchContacts();
      }, []);

    return (
        <>
          <header className='header'>
            <h1>Your Contact Book</h1>
          </header>
          <ContactContext.Provider value={{contact, setContact, contacts, setContacts, fetchContacts }}>
            <Routes>
                <Route path="/" element={<Layout><Dashboard /></Layout>} />
                <Route path="/new" element={<Layout><CreateForm /></Layout>} />
                <Route path="/contact/:id" element={<Layout><ProfileView /></Layout>} />
                <Route path="/edit/:id" element={<Layout><CreateForm /></Layout>} />

            </Routes>
          </ContactContext.Provider>
        </>
      )
    }

export {App, ContactContext};
