import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "./components/Menu/Contact/ContactList";
import CreateContact from "./components/Menu/CreateContact/CreateContact";
import ContactListItem from "./components/Menu/Contact/ContactListItem";
import Home from "./components/Menu/Home/Home";
function App() {
  const [contact, setContact] = useState([]);

  const root = "https://boolean-api-server.fly.dev/aayushlama4008/contact";
  const fetchContact = () => {
    fetch(root)
      .then((response) => response.json())
      .then((data) => setContact(data));
  };
  console.log(contact);
  useEffect(fetchContact, []);

  return (
    <>
      <div className="app">
        <header>
          <h2>Menu</h2>
          <Link to={"/"}>Home</Link>
          <br />
          <Link to={"/Contact-List"}>Contact List</Link>
          <br />
          <Link to={"/Create-New-Contact"}>Add New Contact</Link>
        </header>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Contact-List"
              element={<ContactList data={contact} />}
            ></Route>
            <Route
              path="/Contact-List/Contact-List-Item/:id"
              element={<ContactListItem data={contact} />}
            ></Route>
            <Route
              path="/Create-New-Contact"
              element={
                <CreateContact
                  contact={contact}
                  root={root}
                  getFuntion={fetchContact()}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
