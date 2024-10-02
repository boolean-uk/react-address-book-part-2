import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GetAllContacts } from './ContactAPI/ContactAPIs';
import ContactProfile from './components/Dashboard/ContactProfile';
import Dashboard from './components/Dashboard/dashboard';
import ContactList from './components/Dashboard/ContactList';
import CreateContactForm from './components/Dashboard/CreateContactForm';

export const AppContext = createContext();

function App() {
    
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    });

    const fetchContacts = async () => {
        try {
            const result = await GetAllContacts();
            setContacts(result);
            //console.log(result);
        } catch (error) {
            console.error("Error in fetching contacts: " + error);
        }
    }
 
    useEffect(() => {
        fetchContacts();
    }, [contacts])

    return (
        <AppContext.Provider value={{contacts, setContacts, formData, setFormData}}>
            <div className="container">
            {/*<Link to="/">Dashboard</Link>*/}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="contacts" element={<ContactList />} />
                <Route path="create" element={<CreateContactForm />} />
                <Route path="/view/:id" element={<ContactProfile />} />
                <Route path="/update/:id" element={<CreateContactForm />} />
            </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
