import "./App.css";
import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import LeftMenu from "./components/LeftMenu";
import Contact from "./components/Contact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const GlobalContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  const URL =
    "https://boolean-uk-api-server.fly.dev/VictorsCodingCorner/contact";

  const fetchPeople = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData);
    setContacts(jsonData);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <GlobalContext.Provider value={{ contacts, setContacts }}>
      <div className="app-layout">
        <LeftMenu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/View/:id" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </main>
      </div>
    </GlobalContext.Provider>
  );
}

export { App, GlobalContext };
