import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContactForm from "./components/CreateContactForm";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/krzysztofmmm/contact")
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Home</Link>
          <Link to="/create">Create a contact</Link>
        </header>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route
            path="/contact/:id"
            element={<ContactDetails contacts={contacts} />}
          />
          <Route path="/create" element={<CreateContactForm />} />
        </Routes>
        <footer>© 2024 My Contacts App</footer>
      </div>
    </Router>
  );
};

export default App;
