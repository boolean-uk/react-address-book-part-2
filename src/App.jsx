import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import ContactList from "./components/Menu/Contact/ContactList";
import CreateContact from "./components/Menu/CreateContact/CreateContact";
function App() {
  return (
    <>
      <div className="app">
        <header>
          <h2>Menu</h2>
          <Link to={"/Contact-List"}>Contact List</Link>
          <br />
          <Link to={"/Create-New-Contact"}>Add New Contact</Link>
        </header>
        <div className="routes">
          <Routes>
            <Route path="/Contact-List" element={<ContactList />}></Route>
            <Route
              path="/Create-New-Contact"
              element={<CreateContact />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
