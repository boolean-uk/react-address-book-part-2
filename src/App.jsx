import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowContacts from "./ShowContacts";
import Dashboard from "./Dashboard";
import ContactDetails from "./ContactDetails";
import AddContactForm from "./AddContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [currContactID, setCurrContactID] = useState(0)

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/svennas/contact/")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <Router>
      <Dashboard contacts={contacts} setCurrContactID={setCurrContactID} />

      <Routes>
        <Route path="/list" element={<ShowContacts contacts={contacts} />} />

        <Route
          path="/view/:id"
          element={<ContactDetails contacts={contacts} />}
        />

        <Route
          path="/create"
          element={
            <AddContactForm
              contacts={contacts}
              setContacts={setContacts}
              currContactID={currContactID}
              setCurrContactID={setCurrContactID}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
