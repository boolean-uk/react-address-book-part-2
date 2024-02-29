import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import SingleContactView from "./components/SingleContactView/SingleContactView";
import AddContactForm from "./components/AddContactForm/AddContactForm";

function App() {
  const [contacts, setContacts] = useState([]);

  const processData = (contactArray) => {
    return contactArray.map((element, index) => ({ ...element, id: index }));
  };

  const fetchContacts = async function () {
    const url = "https://boolean-api-server.fly.dev/martenere/contact";
    try {
      let result = await fetch(url);
      let data = await result.json();
      const processedContacts = processData(data);
      console.log(processedContacts);

      setContacts(processedContacts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchContacts, []);

  return (
    <div className="Main-View">
      <NavigationMenu />

      <Routes className>
        <Route path="/" element={<Navigate to="/contacts" replace={true} />} />
        <Route
          path="/contacts"
          element={
            <ContactList contacts={contacts} fetchContacts={fetchContacts} />
          }
        />
        <Route
          path="/contacts/:id"
          element={<SingleContactView contacts={contacts} />}
        />
        <Route path="/AddContact" element={<AddContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
