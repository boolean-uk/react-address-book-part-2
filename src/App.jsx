import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Dashboard from "./components/Dashboard";
import ContactView from "./components/ContactView";
import ContactForm from "./components/ContactForm";
import ContactEditForm from "./components/ContactEditForm";

export const ApiContext = createContext();

function App() {
  const apiUrl = "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  const refreshData = () => {
    setRefresh(refresh + 1);
  };

  const fetchData = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  const navigate = useNavigate();

  const handleNewContact = () => {
    navigate(`/new`);
  };

  const handleMenu = () => {
    navigate(`/`);
  };

  return (
    <>
      <ApiContext.Provider value={{ data, isLoading, refreshData }}>
        <header>
          <h1 onClick={handleMenu} className="menuLink">
            Address book
          </h1>
          <h2 onClick={handleNewContact} className="menuLink">
            Create a new contact
          </h2>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/new" element={<ContactForm />} />

          <Route path="/view/:id" element={<ContactView />} />

          <Route path="/edit/:id" element={<ContactEditForm />} />
        </Routes>
      </ApiContext.Provider>
    </>
  );
}

export default App;
