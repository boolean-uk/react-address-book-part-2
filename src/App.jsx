import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import PersonProfile from "./components/PersonProfile";
import UpdateContact from "./components/UpdateContact";

function App() {
  const [contactData, setContactData] = useState([]);
  const URL = "https://boolean-api-server.fly.dev/Slingreen/contact";

  function getData() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }

  async function AddPerson(person) {
    const response = await fetch(
      URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to submit form: " + response.status + response.statusText
      );
    }

    getData();
  }

  async function DeletePerson(id) {
    const response = await fetch(
      `${URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to submit form: " + response.status + response.statusText
      );
    }
    getData();
  }

  async function UpdatePerson(id, person) {
    const response = await fetch(
      `${URL}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to submit form: " + response.status + response.statusText
      );
    }
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <body className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Contact List</Link>
            </li>
            <li>
              <Link to="/add">Add New Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              contactData={contactData}
              DeletePerson={DeletePerson}
            />
          }
        />
         <Route
          path="/edit/:id"
          element={
            <UpdateContact
              contactData={contactData}
              UpdatePerson={UpdatePerson}
            />
          }
        />
        <Route path="/" element={<ContactList contactData={contactData} />} />
        <Route
          path="/add"
          element={
            <AddContact contactData={contactData} AddPerson={AddPerson} />
          }
        />
      </Routes>
    </body>
  );
}

export default App;
