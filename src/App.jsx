import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContactsListPage } from "./components/contactsListView/ContactsListPage";
import { PageNotFound } from "./components/PageNotFound";
import { ContactDetailsPage } from "./components/ContactDetailsPage";
import { CreateContactPage } from "./components/CreateContactPage";
import { Navbar } from "./components/Navbar";

function App() {
  console.log("Rendering app");
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ContactsListPage contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/contacts"
          element={
            <ContactsListPage contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="contacts/:id"
          element={<ContactDetailsPage contacts={contacts} />}
        />
        <Route path="contacts/create" element={<CreateContactPage />} />
      </Routes>
    </>
  );
}

export default App;
