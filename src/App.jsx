import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./pages/ContactList";
import AddNewContact from "./pages/AddNewContact";

function App() {
  return (
    <>
      <aside className="menu">
        <h1>Menu</h1>
        <nav>
          <ul className="link-list">
            <li>
              <Link to="/" className="link">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/add-new-contact" className="link">
                New Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Routes>
        <Route path="/" element={<ContactList />}></Route>
        <Route path="/add-new-contact" element={<AddNewContact />}></Route>
      </Routes>
    </>
  );
}

export default App;
