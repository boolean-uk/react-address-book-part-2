import './App.css';
import {useState, createContext, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./components/contact_page/ContactPage.jsx";
import DashboardList from "./components/dashboard/DashboardList.jsx";
import DashboardCreate from "./components/dashboard/DashboardCreate.jsx";

export const ContactContext = createContext(null);

function App() {

    const url = "https://boolean-uk-api-server.fly.dev/patrycioss";
    const contactUrl = `${url}/contact`;
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch(contactUrl);
            const data = await response.json();
            setContacts(data);
        };

        fetchContacts();
    }, []);

    return (
        <ContactContext.Provider value={{url, contacts, setContacts}}>
            <Routes>
                <Route path="/" element={<DashboardList/>}/>
                <Route path="/create" element={<DashboardCreate/>}/>
                <Route path="/contacts/:id" element={<ContactPage/>}/>
            </Routes>
        </ContactContext.Provider>
    );
}

export default App;
