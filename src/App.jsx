import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContact from "./components/CreateContact";
import "./App.css";
import UpdateContact from "./components/UpdateContact";

export const ApiContext = createContext();
export const ContactContext = createContext();
function App() {
  const [contact, setContact] = useState(null);

  return (
    // Not adding a setter for the api url
    <ApiContext.Provider value="https://boolean-uk-api-server.fly.dev/noahekse">
      <ContactContext.Provider value={{ contact, setContact }}>
        <Router>
          <nav>
            <Link to="/">Contacts List</Link> |
            <Link to="/create"> Create a contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/contact/:id/update" element={<UpdateContact />} />
          </Routes>
        </Router>
      </ContactContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
