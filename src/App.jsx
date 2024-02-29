import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import SingleContactView from "./components/SingleContactView/SingleContactView";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async function () {
    console.log("Fetching conctacts");
    const url = "https://boolean-api-server.fly.dev/martenere/contact";
    try {
      let result = await fetch(url);
      let data = await result.json();
      //   const processedContacts = processData(data);
      //   console.log(processedContacts);

      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => fetchContacts, []);

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
          element={
            <SingleContactView
              contacts={contacts}
              fetchContacts={fetchContacts}
            />
          }
        />
        <Route path="/AddContact" element={<ContactForm method={"POST"} />} />
      </Routes>
    </div>
  );
}

export default App;
