import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import CreateContactForm from "./components/CreateContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  let location = useLocation();

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/hannpham1007/contact")
      .then((response) => response.json())
      .then((data) => {
        const idOverFifteen = []
        data.forEach(element => {
            if(element.id > 15){
                idOverFifteen.push(element)
            }
        });
        console.log(data)
        setContacts(idOverFifteen)
      })
  };

  useEffect(() => {
    fetchData();
  }, [location]);
  console.log(location)

  return (
    <main className="app">
        <header>
        <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/contacts">Contact List</Link>
        </li>
        <li>
          <Link to="/create">Add New Contact</Link>
        </li>
      </ul>
        </header>


      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route
          path="/contacts"
          element={<ContactList contactList={contacts} />}
        ></Route>
        <Route
          path="/view/:id"
          element={<ContactDetail contacts={contacts} />}
        ></Route>
        <Route path="/create" element={<CreateContactForm contacts={contacts}/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
