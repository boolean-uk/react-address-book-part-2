import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateNewContactFormPage from "./components/CreateNewContactFormPage.jsx";

function App() {
  const [contactsList, setContactsList] = useState([]);
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        setContactsList(res);
      } catch (er) {
        console.log(`OBS!!! Something went wrong fething from ${URL}`);
      }
    };
    fetchData();
  }, [URL]);

  console.log(contactsList);
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello Vincent</h2>
      <header>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createcontact" element={<CreateNewContactFormPage />} />
        </Routes>
      </header>
    </>
  );
}

export default App;
