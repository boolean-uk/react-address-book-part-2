import { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CreateContact from "./components/CreateContact";
import Dashboard from "./components/Dashboard";
import ProfileView from "./components/ProfileView";
import UpdateContact from "./components/UpdateContact";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setContacts(responseData);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/createContact">Create contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/dashboard" element={<Dashboard contacts={contacts} />} />
        <Route
          path="/createContact"
          element={
            <CreateContact contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/view/:id"
          element={
            <ProfileView contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route
          path="/update/:id"
          element={
            <UpdateContact contacts={contacts} setContacts={setContacts} />
          }
        />
      </Routes>
    </>
  );
}
