import { useEffect, useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/pialoana/contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <section>
          <header>
            <h1>Menu</h1>
            <ul>
              <li>
                <Link to="/contact">
                  <button>Contact List</button>
                </Link>
              </li>
              <li>
                <Link to="/CreateContact">
                  <button>Create Contact</button>
                </Link>
              </li>
            </ul>
          </header>
        </section>
        <section>
          <Routes>
            <Route
              path="/contact"
              element={<ContactList contacts={contacts} />}
            />
            <Route
              path="/CreateContact"
              element={
                <CreateContact contacts={contacts} setContacts={setContacts} />
              }
            />
            <Route
              path="/contact/:id"
              element={<ContactDetails contacts={contacts} />}
            />
            {/* Define routes for other components */}
          </Routes>
        </section>
      </div>
    </Router>
  );
}

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const selectedContact = contacts.find(
      (contact) => contact.id === parseInt(id)
    );
    setContact(selectedContact);
  }, [id, contacts]);

  //const contact = contacts.find((contact) => contact.id === parseInt(id));
  if (!contact) {
    return <div>Contact not found</div>;
  }
  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <li>Id: {contact.id}</li>
      <li>Email: {contact.email}</li>
      <li>Street: {contact.street}</li>
      <li>City: {contact.city}</li>
    </article>
  );
}

function ContactList({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul style={{ marginBottom: "10px" }}>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

function ContactListItem({ contact }) {
  return (
    <li>
      <h3>
        <Link to={`/contact/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </h3>
    </li>
  );
}

function CreateContact({ contacts, setContacts }) {
  // import { useState } from "react";
  // import { useNavigate } from "react-router-dom";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted!"); // Add this line to log the submission
    // Prepare contact data
    const newContact = {
      firstName,
      lastName,
      street,
      city,
    };

    // Send the new contact data to the API for saving
    fetch("https://boolean-api-server.fly.dev/pialoana/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        // After successful creation, update the contacts state with the new contact
        setContacts((prevContacts) => [...prevContacts, data]);

        // Clear the form after submission
        setFirstName("");
        setLastName("");
        setStreet("");
        setCity("");

        // Navigate back to the contact list
        navigate("/contact");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create A Contact</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Contact</button>
    </form>
  );
}
