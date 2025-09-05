
import { Route, Routes, useNavigate, } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react';
import ContactForm from './components/contactForm.jsx';
import Menu from './components/menu.jsx'
import ContactList from './components/contactList.jsx';
import ContactProfile from './components/ContactProfile.jsx';
import ContactEdit from './components/contactEdit.jsx';
export const ContactContext = createContext();

function App() {

    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({});
    const [fetchContact, setFetchContact] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
            const response = await fetch('https://boolean-uk-api-server.fly.dev/598115/contact');
            const data = await response.json();
            setContacts(data);
            } catch (error) {
            console.error("Failed to fetch contacts:", error);
            }
        };

        fetchContacts();
        }, [fetchContact]);


    function addContact(contact) {

        fetch('https://boolean-uk-api-server.fly.dev/598115/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        });
        navigate('/contacts');
        const refetch = !fetchContact;
        setFetchContact(refetch);
    }

    function handleProfileClick(contact) {
        navigate('/contact/' + contact.id);
    }

    return (
    <>
    <ContactContext.Provider value={{contact, setContact, fetchContact, setFetchContact}}>
        <Routes>
          <Route path="/" element={<Menu></Menu>} />
          <Route path="/newcontact" element={<ContactForm addContact={addContact}></ContactForm>} />
          <Route path="/contacts" element={<ContactList contacts={contacts} handleProfileClick={handleProfileClick}></ContactList>} />
          <Route path="/contact/:id" element={<ContactProfile></ContactProfile>} />
          <Route path="/editcontact/:id" element={<ContactEdit></ContactEdit>} />
        </Routes>
    </ContactContext.Provider>
    </>
    );
}

export default App;
