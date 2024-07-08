import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddNewContact from "./components/AddNewContact";
import UpdateContact from "./components/UpdateContact";

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      <aside className="dashboard-layout">
        <h2>Menu</h2>
        <ul className="aside-ul">
          <li>
            <Link to="/contacts-list">Contacts List</Link>
          </li>
          <li>
            <Link to="/add-new-contact">Add New Contact</Link>
          </li>
        </ul>
      </aside>
      <Routes>
        <Route
          path="/contacts-list"
          element={
            <ContactList
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
        <Route
          path="/view/:id"
          element={
            <ContactDetails
              allContacts={allContacts}
              setAllContacts={setAllContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
          }
        />
        <Route
          path="/add-new-contact"
          element={
            <AddNewContact
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
        <Route
          path="/update/:id"
          element={
            <UpdateContact
              allContacts={allContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
