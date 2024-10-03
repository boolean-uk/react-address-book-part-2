import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import ContactDetails from "./components/ContactDetails";
import { useState, useEffect } from "react";
import "./App.css";
import "./src/output.css";
//No Css
function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "https://boolean-uk-api-server.fly.dev/IbbiSecka/contact"
      );
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id, navigate) => {
    try {
      const res = await fetch(
        `https://boolean-uk-api-server.fly.dev/IbbiSecka/contact/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setContacts((prevContacts) => prevContacts.filter((x) => x.id !== id));
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting contact", error);
    }
  };

  const addContact = async (addedContact) => {
    try {
      const res = await fetch(
        "https://boolean-uk-api-server.fly.dev/IbbiSecka/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addedContact),
        }
      );

      if (res.ok) {
        const newContact = await res.json();
        setContacts((previousContacts) => [...previousContacts, newContact]);
      } else {
        console.error("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact", error);
    }
  };

  const updateContact = async (id, updatedInfo, navigate) => {
    try {
      const res = await fetch(
        `https://boolean-uk-api-server.fly.dev/IbbiSecka/contact/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setContacts((prevData) =>
          prevData.map((contact) => (contact.id === id ? data : contact))
        );
        navigate(`/contacts/${id}`);
      }
    } catch (error) {
      console.error("Error updating contact", error);
    }
  };

  return (
    <Router>
      <div className="app-container flex">
        <div className="p-4 w-1/4">
          <Section1 />
        </div>
        <div className="p-4 w-3/4 bg-red-400">
          <Routes>
            <Route
              path="/"
              element={<Section2 contacts={contacts} addContact={addContact} />}
            />
            <Route
              path="/create"
              element={
                <Section2
                  contacts={contacts}
                  addContact={addContact}
                  showForm
                />
              }
            />
            <Route
              path="/contacts/:id"
              element={
                <ContactDetails
                  contacts={contacts}
                  updateContact={updateContact}
                  deleteContact={deleteContact}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
