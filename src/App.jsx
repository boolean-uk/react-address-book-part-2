import { useEffect, useState, createContext } from "react";
import './App.css';
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetails";
import Dashboard from "./components/Dashboard";
import CreateForm from "./components/CreateContact";
import { useNavigate, Route, Routes } from 'react-router-dom';
import EditForm from "./components/EditContact";

const Context = createContext();


function App() {
    const [contacts, setContacts] = useState([]);
    


    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/MalteStengard/contact");
            const data = await response.json();
            setContacts(data);
          } catch (error) {
            console.error("Error fetching contacts:", error);
          }
        };
      
        fetchContacts();
      }, []);

      const navigate = useNavigate();

      const handleNavigation = (path) => {
        navigate(path);
      };

      //fix routes bruh
      //fix edit 
    return (
        <Context.Provider   value={{contacts, setContacts, navigate, handleNavigation}}     >
        <div className="container">
          <button id="create-contact-button" onClick={() => handleNavigation("/create")}>Create Contact</button>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />
            <Route path="/edit/contacts/:id" element={<EditForm />} /> 
          </Routes>
        </div>
        </Context.Provider>
      );
}

export { App, Context };
