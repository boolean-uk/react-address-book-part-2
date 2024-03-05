import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import CreateContactForm from "./components/CreateContactForm";
import Dashboard from "./components/Dashboard";

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/maha897/contact")
            .then((response) => response.json())
            .then(setContacts)
    }, [])

    return (
      <main>
        <div className="menu">
          <h1>Menu</h1>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Contacts</Link>
              </li>
              <li>
                <Link to={"/create-contact"}>Add new contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard contacts={contacts} />} />
          <Route path="/create-contact" element={<CreateContactForm />} />
        </Routes>
      </main>
    );
}

export default App;
