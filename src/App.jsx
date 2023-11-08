import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import ContactList from "./components/Menu/Contact/ContactList";
import CreateContact from "./components/Menu/CreateContact/CreateContact";
import ContactListItem from "./components/Menu/Contact/ContactListItem";
import Home from "./components/Menu/Home/Home";
function App() {
  const data = [
    {
      firstName: "Hallie",
      lastName: "Mertz",
      street: "Wilkinson Forks",
      city: "Arturotown",
      id: 1,
    },
    {
      firstName: "Josiane",
      lastName: "Ernser",
      street: "Brakus Island",
      city: "Annamarieland",
      id: 2,
    },
    {
      firstName: "Madonna",
      lastName: "Walker",
      street: "Witting Loaf",
      city: "Lake Lorenza",
      id: 3,
    },
  ];

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
              element={<ContactList data={data} />}
            ></Route>
            <Route
              path="/Contact-List/Contact-List-Item/:id"
              element={<ContactListItem data={data} />}
            ></Route>
            <Route
              path="/Create-New-Contact"
              element={<CreateContact />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
