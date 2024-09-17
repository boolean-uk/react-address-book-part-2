import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactListPage from "./ContactListPage";
import NewContactPage from "./NewContactPage";
import ContactInfoPage from "./ContactInfoPage";

function MenuSidebar() {
  const [contacts, setContacts] = useState([
    { firstName: "", lastName: "", street: "", city: "" },
  ]);
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/VictorAdamson/contact`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((jsonData) => {
        console.log("Menu fetch: ", jsonData);
        setContacts(jsonData);
      });
  }, [setContacts]);
  return (
    <>
      <div className="main-layout">
        <section>
          <h3>Menu</h3>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/new_contact">Add New Contact</Link>
            </li>
          </ul>
        </section>
        <Routes>
          <Route
            path="/contacts"
            element={
              <ContactListPage contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/new_contact"
            element={
              <NewContactPage contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/contacts/:id"
            element={<ContactInfoPage contacts={contacts} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default MenuSidebar;
