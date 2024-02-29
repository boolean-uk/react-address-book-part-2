import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactProfile from "./components/ContactProfile";
import CreateContact from "./components/CreateContact";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(
      "Running my effect once, note: dependency array contains []..."
    );
    fetchContacts();
  }, []);
  function fetchContacts() {
    fetch(`https://boolean-api-server.fly.dev/jacobchenjensen/contact`)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error("Error fetching contact list:", error);
      });
  }

  return (
    <>
      <header>
        <h1>Welcome to your Address Book!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/contacts" onClick={() => fetchContacts()}>
                View All Contacts
              </Link>
            </li>
            <li>
              <Link to="/create">Create New Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/contacts"
          element={
            <ContactList contacts={contacts} fetchContacts={fetchContacts} />
          }
        />
        <Route
          path="/create"
          element={
            <CreateContact
              setContacts={setContacts}
              fetchContacts={fetchContacts}
            />
          }
        />
        <Route
          path="/contacts/:id"
          element={
            <ContactProfile contacts={contacts} setContacts={setContacts} />
          }
        />
      </Routes>
    </>
  );
}
