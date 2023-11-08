import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./pages/ContactList";
import AddNewContact from "./pages/AddNewContact";
import ContactProfile from "./pages/ContactList/components/ContactProfile";
import Landing from "./pages/Landing";

function App() {
  const [contacts, setContacts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/contact/")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setRefresh(false);
      });
  };

  useEffect(fetchData, [refresh]);

  return (
    <>
      <aside className="menu">
        <h1>Menu</h1>
        <nav>
          <ul className="link-list">
            <li>
              <Link to="/" className="link">
                Landing
              </Link>
            </li>
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
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/add-new-contact"
          element={<AddNewContact setRefresh={setRefresh} />}
        ></Route>
        <Route
          path="/contacts"
          element={<ContactList contacts={contacts} />}
        ></Route>
        <Route
          path="/contacts/:id"
          element={
            <ContactProfile contacts={contacts} setRefresh={setRefresh} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
