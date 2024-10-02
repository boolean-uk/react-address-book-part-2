import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext, useEffect } from "react";
import { ContactBookContext } from "./context";
import ContactPage from "./components/contactPage/ContactPage";
import ContactProfile from "./components/contactProfilePage/ContactProfile";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  const { getContacts } = useContext(ContactBookContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="app-container">
      <header>
        <nav className="menu-left">
          <div className="menu-left__header">
            <h1>Menu</h1>
          </div>
          <div className="menu-left__content">
            <ul>
              <li>
                <Link to="/contact">Contact List</Link>
              </li>
              <li>
                <Link to="/add">Add New Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/:id" element={<ContactProfile />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="update/:id" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
