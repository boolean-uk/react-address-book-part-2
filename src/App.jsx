import { createContext, useEffect, useState } from "react";
import "./App.css";
import ContactsSection from "./sections/Contacts";
import { Link, Route, Routes } from "react-router-dom";
import ViewContact from "./sections/Contact";
import CreateContact from "./sections/CreateContact";
import DashboardSection from "./sections/Dashboard";
import EditContact from "./sections/Contact/components/EditContact";

const MyContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  console.log(contacts);

  return (
    <>
      <MyContext.Provider value={{ contacts, setContacts }}>
        <Routes>
          <Route path="/" element={<DashboardSection />} />  
          <Route path="/contacts" element={<ContactsSection />} />
          <Route path="/contacts/view/:id" element={<ViewContact />} />
          <Route path="/contacts/view/:id/edit" element={<EditContact />} />
          <Route path="/contacts/create" element={<CreateContact />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export { App, MyContext };
