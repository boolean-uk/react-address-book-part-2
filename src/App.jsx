import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateNewContactFormPage from "./components/CreateNewContactFormPage.jsx";
import DetailedContactViewPage from "./components/DetailedContactViewPage.jsx";

function App() {
  const [contactsList, setContactsList] = useState([]);

  const updateContactsList = (newContactsList) => {
    setContactsList(newContactsList);
  };

  return (
    <>
      <h1 className="home-page-title"> Address book</h1>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              contactsList={contactsList}
              updateContactsList={updateContactsList}
            />
          }
        ></Route>
        <Route path="/createcontact" element={<CreateNewContactFormPage />} />
        <Route
          path="/view/:id"
          element={<DetailedContactViewPage contactsList={contactsList} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
