import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import AddNewContact from "./components/AddNewContact";
import ShowContactList from "./components/ShowContactList";

function App() {
  const [contactlist, setContactList] = useState([]);

  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  };
  const [form, setForm] = useState(INITIAL_STATE);

  useEffect(() => {
    const getContact = () => {
      fetch("https://boolean-api-server.fly.dev/tayokanch/contact")
        .then((response) => response.json())
        .then((data) => setContactList(data));
    };

    getContact();
  }, []);

  useEffect(() => {
    const postContact = () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      };

      fetch("https://boolean-api-server.fly.dev/tayokanch/contact", options)
        .then((response) => response.json())
        .then((data) => setContactList(data));
    };

    postContact();
  }, [setForm]);

  return (
    <main>
      <section className="menu">
        <h1>Menu</h1>
        <p>
          <Link to="/ShowContactList">Contacts List</Link>
        </p>
        <p>
          <Link to="/AddNewContact">Add new Contact</Link>
        </p>
      </section>

      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/AddNewContact"
            element={<AddNewContact form={form} setForm={setForm} />}
          />
          <Route
            path="/ShowContactList"
            element={<ShowContactList contactlist={contactlist} />}
          />
        </Routes>
      </section>
    </main>
  );
}

export default App;
