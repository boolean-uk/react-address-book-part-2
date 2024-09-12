import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import CreateContactForm from "./components/CreateContactForm";
import ContactDetails from "./components/ContactDetails";
import EditContactForm from "./components/EditContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/sebbsoon/contact")
      .then((response) => response.json())
      .then((item) => setContacts(item));
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  function createContact(contact) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    };

    fetch("https://boolean-api-server.fly.dev/sebbsoon/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setContacts([...contacts, data]);
      });
  }
  function deleteContact(id) {
    if (id < 16) {
      return;
    }
    const requestOptions = {
      method: "DELETE",
    };
    fetch(
      `https://boolean-api-server.fly.dev/sebbsoon/contact/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setContacts(contacts.filter((contact) => contact.id !== data.id));
      });
  }
  function editContact(contact) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    };
    fetch(
      `https://boolean-api-server.fly.dev/sebbsoon/contact/${contact.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setContacts(
          contacts.map((c) => {
            return c.id === data.id ? data : c;
          })
        );
      });
  }
  return (
    <div className="app">
      <div className="sider" />
      <div className="main">
        <div className="header">
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/contacts">
            Dashboard
          </Link>
          <Link className="nav" to="/create">
            Create Contact
          </Link>
        </div>
        <hr></hr>
        <div className="body">
          <Routes>
            <Route
              path="/contacts"
              element={<Dashboard contacts={contacts} />}
            />
            <Route
              path="/create"
              element={<CreateContactForm submit={createContact} />}
            />
            {contacts.map((contact) => (
              <>
                <Route
                  path={`contacts/${contact.id}`}
                  key={contact.id}
                  element={
                    <ContactDetails
                      contact={contact}
                      deleteContact={deleteContact}
                    />
                  }
                />
                <Route
                  path={`contacts/${contact.id}/edit`}
                  key={contact.id}
                  element={
                    <EditContactForm contact={contact} submit={editContact} />
                  }
                />
                <Route path="/" element={<h2>Home Sweet Home</h2>} />
              </>
            ))}
          </Routes>
        </div>
      </div>
      <div className="sider" />
    </div>
  );
}

export default App;
