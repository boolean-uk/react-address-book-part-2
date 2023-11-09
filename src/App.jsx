import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Contacts/Main";
import Menu from "./components/Menu";
import Form from "./components/Contacts/Form";
import PersonView from "./components/PersonView";

function App() {
  const [showContact, setShowContact] = useState([]);
  const URL = "https://boolean-api-server.fly.dev/PCapid3v/contact";

  const getContact = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setShowContact(data));
  };

  useEffect(getContact, []);

  return (
    <>
      <header>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Main contacts={showContact} />} />
          <Route
            path="/form"
            element={<Form getContact={getContact} URL={URL} />}  />
          <Route path="/contact/:id" element={<PersonView state={{showContact}}/>} />
        </Routes>
      </header>
    </>
  );
}

export default App;
