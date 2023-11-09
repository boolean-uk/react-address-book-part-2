import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import AddNewContact from "./components/AddNewContact";
import ShowContactList from "./components/ShowContactList";
import PersonalContact from "./components/PersonalContact";

function App() {
  const [contactlist, setContactList] = useState([]);
  const [fetchData, setFetchData] = useState(false); // Add a state for triggering GET request

  // Function to make a GET request to fetch contacts
  const getContact = () => {
    fetch("https://boolean-api-server.fly.dev/tayokanch/contact")
      .then((response) => response.json())
      .then((data) => setContactList(data));
  };

  useEffect(() => {
    getContact(); // Initial GET request when the component mounts
  }, []);

  // set up for post request
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Function to make a POST request to add a new contact
  const postContact = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch("https://boolean-api-server.fly.dev/tayokanch/contact", options)
      .then((response) => response.json())
      .then((data) => {
        //console.log(` This is data${data}`);
        // After a successful POST, trigger a GET request to update the contact list
        setFetchData(true);
      });
  };

  // This is basically used for re-rendering the getpost after a new post API has been successfully made
  useEffect(() => {
    if (fetchData) {
      getContact(); // Trigger the GET request when `fetchData` is true
      setFetchData(false); // Reset `fetchData` to avoid continuous GET requests
    }
  }, [fetchData]);

  const deleteContact = (id) => {
    const options = {
      method: "DELETE",
    };

    fetch(`https://boolean-api-server.fly.dev/tayokanch/contact/${id}`, options)
      .then((response) => response.json())
      .then(() => {
        setFetchData(true);
      });
  };

  return (
    <main>
      <section className="menu">
        <h1>Menu</h1>
        <p>
          <Link to="/">Contacts List</Link>
        </p>
        <p>
          <Link to="/AddNewContact">Add new Contact</Link>
        </p>
      </section>

      <section>
        <Routes>
          <Route
            path="/AddNewContact"
            element={
              <AddNewContact
                formData={formData}
                setFormData={setFormData}
                postContact={postContact}
              />
            }
          />
          <Route
            path="/"
            element={
              <ShowContactList
                contactlist={contactlist}
                deleteContact={deleteContact}
              />
            }
          />

          <Route path="/contact/:id" element={<PersonalContact />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
