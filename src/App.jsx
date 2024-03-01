import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContactsListPage } from "./components/contactsListView/ContactsListPage";
import { PageNotFound } from "./components/PageNotFound";
import { ContactDetailsPage } from "./components/ContactDetailsPage";
import { CreateContactPage } from "./components/CreateContactPage";
import { Navbar } from "./components/Navbar";
import { EditContactPage } from "./components/EditContactPage";

function App() {
  console.log("Rendering app");
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Route used for dev purpose */}
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
        <Route
          path="contacts/:id"
          element={<ContactDetailsPage contacts={contacts} />}
        />
        <Route
          path="contacts/:id/edit"
          element={<EditContactPage contacts={contacts} />}
        />
        <Route path="contacts/create" element={<CreateContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
