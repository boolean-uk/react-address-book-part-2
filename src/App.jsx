import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewContacts from "./components/ContactList/index.jsx";
import ViewProfile from "./components/ContactList/Profile.jsx";
import CreateContact from "./components/CreateContact";
import UpdateContact from "./components/ContactList/UpdateContact.jsx";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact`)
      .then((response) => response.json())
      .then((item) => setContacts(item));
  }, []);
  return (
    <>
      <header>
        <h1>Menu</h1>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contact List</Link>
            </li>
            <li>
              <Link to="/create">Create new contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/contacts"
          element={
            <ViewContacts contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/contacts/:id"
          element={
            <ViewProfile contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/contacts/:id/update"
          element={
            <UpdateContact contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/create"
          element={
            <CreateContact contacts={contacts} setContacts={setContacts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
