import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  let location = useLocation();

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/hannapham1007/contact")
      .then((response) => response.json())
      .then((data) => {
        const idOverFifteen = [];
        data.forEach((element) => {
          if (element.id > 15) {
            idOverFifteen.push(element);
          }
        });
        console.log(data);
        setContacts(idOverFifteen);
      });
  };

  useEffect(() => {
    fetchData();
  }, [location]);
  console.log(location);

  const addNewContact = (formData) => {
    return(
    fetch("https://boolean-api-server.fly.dev/hannapham1007/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }))
      .catch((error) => console.error("Error adding new answer", error));
  };

  const deleteContact = (contactId) => {
    fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/contact/${contactId}`,
      {
        method: "DELETE",
      }
    ).catch((error) => console.error("Error deleting contact", error));
  };
  
  const updateContact = (contactId, updatedContact) => {
    return fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/contact/${contactId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedContact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => {
      console.error("Error updating contact", error);
      throw error; 
    });
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
        <Route path="/" element={<Dashboard addNewContact={addNewContact} />}></Route>
        <Route
          path="/contacts"
          element={<ContactList contactList={contacts} />}
        ></Route>
        <Route
          path="/view/:id"
          element={
            <ContactDetail contacts={contacts} onDelete={deleteContact} onUpdate={updateContact}/>
          }
        ></Route>
                <Route
          path="/view/:id/edit"
          element={<EditContactForm contacts={contacts} onUpdate={updateContact}/>
          }
        ></Route>
        <Route
          path="/create"
          element={<CreateContactForm addNewContact={addNewContact}/>}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
