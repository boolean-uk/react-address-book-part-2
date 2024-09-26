import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ContactList from "./components/ContactList";
import ContactProfile from "./ContactProfile";
import CreateContact from "./CreateContact";
import UpdateContact from "./UpdateContact";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/espensolhaug1/contact", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contacts" element={<ContactList contacts={contacts} />} />
      <Route
        path="/contacts/create"
        element={<CreateContact setContacts={setContacts} />}
      />
      <Route
        path="/contacts/:id"
        element={
          <ContactProfile contacts={contacts} setContacts={setContacts} />
        }
      />
      <Route
        path="/contacts/:id/update"
        element={
          <UpdateContact contacts={contacts} setContacts={setContacts} />
        }
      />
    </Routes>
  );
}

export default App;
