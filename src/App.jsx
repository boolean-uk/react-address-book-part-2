import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import ContactsList from "./components/ContactsList";
import AddNewContact from "./components/AddNewContact";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [people, setPeople] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  const addNewContact = (newContact) => {
    const newArray = [...people, newContact];
    setPeople(newArray);
  };

  useEffect(() => {
    async function retrievePeople() {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/JDC-horizons/contact"
        );
        const fetchedData = await response.json();
        setPeople(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }

    retrievePeople();
  }, []);

  return (
    <div id="container">
      <Menu />
      <Routes>
        <Route
          path="/contacts-list/:id"
          element={<ContactDetails currentId={currentId} people={people} />}
        />
        <Route
          path="/contacts-list/"
          element={
            <ContactsList
              people={people}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          }
        />
        <Route
          path="/add-new-contact"
          element={
            <AddNewContact people={people} addNewContact={addNewContact} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
