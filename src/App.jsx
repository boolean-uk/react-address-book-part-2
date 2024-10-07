import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuSection from "./sections/Menu/MenuComponent";
import ContactList from "./sections/Contacts/Components/ContactList";
import ContactView from "./sections/Contacts/Components/ContactView";
import ContactForm from "./sections/Contacts/Components/ContactForm";
import UpdateContactForm from "./sections/Contacts/Components/UpdateContactForm";

const ContactContext = createContext();

function App() {
  const url = "https://boolean-uk-api-server.fly.dev/ingeborgausteid/contact";
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setContacts(jsonData);
  };

  useEffect(() => {  
    fetchContacts();
  }, [contacts]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts, url, fetchContacts}}>
      <section className="dashboard-layout">
        <MenuSection />
        <Routes>
          <Route path="/" element={<ContactList />}></Route>
          <Route path="/contacts" element={<ContactList />}></Route>
          <Route path="/contacts/new" element={<ContactForm />}></Route>
          <Route path="/contact/view/:id" element={<ContactView />}></Route>
          <Route path="/contacts/update/:id" element={<UpdateContactForm />}></Route>
        </Routes>
      </section>
    </ContactContext.Provider>
  );
}

export { App, ContactContext };
