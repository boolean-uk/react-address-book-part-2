import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./pages/ContactList";
import AddNewContact from "./pages/AddNewContact";
import { useEffect, useState } from "react";
import ContactProfile from "./pages/ContactList/components/ContactProfile";

const ROOT_URL = "https://boolean-api-server.fly.dev/yee0802/contact/";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchData = () => {
    fetch(ROOT_URL)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  };

  useEffect(fetchData, []);

  return (
    <>
      <aside className="menu">
        <h1>Menu</h1>
        <nav>
          <ul className="link-list">
            <li>
              <Link to="/contacts" className="link">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/add-new-contact" className="link">
                New Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Routes>
        <Route
          path="/contacts"
          element={<ContactList contacts={contacts} />}
        ></Route>
        <Route path="/add-new-contact" element={<AddNewContact />}></Route>
        <Route
          path="/contacts/:id"
          element={<ContactProfile contacts={contacts} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
