import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ControlPanel from "./components/ControlPanel";
import ContactList from "./components/contacts/components";

import CreateContactDetails from "./components/CreateContactDetails";
import ContactDetails from "./components/contacts/components/ContactDetails";
import UpdatedContactList from "./components/UpdatedContactList";

import "./App.css";

function App() {
  const [theContactData, setTheContactData] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const theUrl = "https://boolean-api-server.fly.dev/Hayor4real/contact";

  function fetchAndSetContactData() {
    fetch(theUrl)
      .then((response) => response.json())
      .then((data) => {
        setTheContactData(data);
        setFetchData(false);
      });
  }
  useEffect(() => {
    fetchData && fetchAndSetContactData();
  }, [fetchData]);

  return (
    <>
      <div className="main__container">
        <header className="header__part">
          <section>
            <h2>Menu</h2>
            <Link to="/contact__list">Contact List</Link>
            <br />
            <Link to="/create__contact__detail">Add new contact</Link>
          </section>
        </header>
        <Routes>
          <Route
            path="/"
            element={<ControlPanel theContactData={theContactData} />}
          ></Route>
          <Route
            path="/contact__list"
            element={<ContactList theContactData={theContactData} />}
          ></Route>
          <Route
            path="/create__contact__detail"
            element={
              <CreateContactDetails
                theContactData={theContactData}
                theUrl={theUrl}
                fetchAndSetContactData={fetchAndSetContactData}
                setFetchData={setFetchData}
              />
            }
          ></Route>
          <Route
            path="/contact__list/contact__details/:id"
            element={
              <ContactDetails
                theContactData={theContactData}
                theUrl={theUrl}
                setFetchData={setFetchData}
              />
            }
          ></Route>
          <Route
            path="/update__contact/:id"
            element={
              <UpdatedContactList
                theUrl={theUrl}
                setFetchData={setFetchData}
                theContactData={theContactData}
              />
            }
          ></Route>
        </Routes>
      </div>
      |
    </>
  );
}

export default App;
