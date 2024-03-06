import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/Pmylonas13/contact")
      .then((response) => response.json())
      .then((data) => {
        const idOverFifteen = data.filter((contact) => contact.id > 15);
        setContacts(idOverFifteen);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  };

  const addNewContact = async (formData) => {
    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/Pmylonas13/contact",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to add new contact");
      }
    } catch (error) {
      console.error("Error adding new contact:", error);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Pmylonas13/contact/${contactId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const updateContact = async (contactId, updatedContact) => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Pmylonas13/contact/${contactId}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedContact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      throw error;
    }
  };

  return (
    <main className="app">
      <header>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/contacts">Contact List</Link>
          </li>
          <li>
            <Link to="/create">Add New Contact</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Dashboard addNewContact={addNewContact} />}
        />
        <Route
          path="/contacts"
          element={<ContactList contactList={contacts} />}
        />
        <Route
          path="/view/:id"
          element={
            <ContactDetail
              contacts={contacts}
              onDelete={deleteContact}
              onUpdate={updateContact}
            />
          }
        />
        <Route
          path="/view/:id/edit"
          element={<EditContactForm onUpdate={updateContact} />}
        />
        <Route
          path="/create"
          element={<CreateContactForm addNewContact={addNewContact} />}
        />
      </Routes>
    </main>
  );
}

export default App;
