import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DeleteALL from "./components/DeleteAll";
import ContactDetails from "./components/ContactDetails";
import ContactList from "./components/ContactList";
import CreateContact from "./components/CreateContact";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/pialoana/contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <section>
          <header>
            <h1>Menu</h1>
            <ul>
              <li>
                <Link to="/contact">
                  <button>Contact List</button>
                </Link>
              </li>
              <li>
                <Link to="/CreateContact">
                  <button>Create Contact</button>
                </Link>
              </li>
              <li>
                <Link to="/delete-all">
                  <button>Delete ALL</button>
                </Link>
              </li>
            </ul>
          </header>
        </section>
        <section>
          <Routes>
            <Route
              path="/contact"
              element={<ContactList contacts={contacts} />}
            />
            <Route
              path="/CreateContact"
              element={<CreateContact setContacts={setContacts} />}
            />
            <Route
              path="/contact/:id"
              element={
                <ContactDetails contacts={contacts} setContacts={setContacts} />
              }
            />
            <Route
              path="/delete-all"
              element={<DeleteALL setContacts={setContacts} />}
            />
            {/* Define routes for other components */}
          </Routes>
        </section>
      </div>
    </Router>
  );
}
