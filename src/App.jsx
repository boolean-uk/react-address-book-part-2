import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import ContactLists from "./components/ContactLists";
import AddNewContact from "./components/AddNewContact";
import Address from "./components/Address";

function App() {
  return (
    <nav>
      <h1>Menu</h1>
      <Link to="/ContactsList">Contacts List</Link>
      <br />
      <Link to="/AddNewContact">Add New Contact</Link>
      <Routes>
        <Route path="/ContactsList/*" element={<ContactLists />} />
        <Route path="/AddNewContact" element={<AddNewContact />} />
        <Route path="/Address/:id" element={<Address />}></Route>
      </Routes>
    </nav>
  );
}

export default App;
