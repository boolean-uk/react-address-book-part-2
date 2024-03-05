import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import CreateContactForm from "./components/CreateContactForm";
import Dashboard from "./components/Dashboard";
import ContactDetails from "./components/ContactDetails";
import EditForm from "./components/EditForm";

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/maha897/contact")
            .then((response) => response.json())
            .then(setContacts)
    }, [contacts])

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
          <Route path="/create-contact" element={<CreateContactForm contacts={contacts} setContacts={setContacts}/>} />
          <Route path="/contact/:id" element={<ContactDetails contacts={contacts} setContacts={setContacts}/>} />
          <Route path="/contact/:id/edit" element={<EditForm contacts={contacts} setContacts={setContacts}/>} />
        </Routes>
      </main>
    );
}

export default App;
