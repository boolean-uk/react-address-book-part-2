import './App.css';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import PersonProfile from './components/PersonProfile';
import CreateContact from './components/CreateContact';
import { Link } from 'react-router-dom';
import DeleteProfile from './components/DeleteProfile';
import UpdateContact from './components/UpdateContact';

function App() {

    const url ="https://boolean-uk-api-server.fly.dev/isabelltran/contact"
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
  };
  fetchData();
  }, []);

  const addContact = async (newPerson) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      });

      if (!response.ok) {
        throw new Error("Fail to save in API");
      }

      const savedPerson = await response.json();

      setData((prev) => [...prev, savedPerson]);
    } catch (error) {
      console.error("Fail:", error);
    }
};

    const deleteContact = async (id) => {
    try {
      const response = await fetch(url, {    
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Fail to save in API");
      }

      setData((prev) => prev.filter((person) => person.id !== id));
    } catch (error) {
      console.error("Fail:", error);
    }
  };

  const updateContact = async (updatePerson) => {
    try {
      const response = await fetch(`${url}/${updatePerson.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePerson),
      });

      if (!response.ok) {
        throw new Error("Fail to save in API");
      }

      const savedPerson = await response.json();

      setData((prev) =>
      prev.map((person) =>
        person.id === savedPerson.id ? savedPerson : person
      )
    );
    } catch (error) {
      console.error("Fail:", error);
    }
  };
    return (
        <>
            <div className="App">
            <aside className="Sidebar">
                <h2>Menu</h2>
                <nav>
                <ul>
                    <li><Link to="/">Contacts List</Link></li>
                    <li><Link to="/Createprofile">Add new Contact</Link></li>
                    <li><Link to="/Deleteprofile">Delete Contact</Link></li>
                    <li><Link to="/Updateprofile">Update Contact</Link></li>

                </ul>
                </nav>
            </aside>

            <main className="Content">
                <Routes>
                <Route path="/" element={<ContactList people={data} />} />
                <Route path="/:id" element={<PersonProfile data={data} />} />
                <Route path="/Createprofile" element={<CreateContact addContact={addContact}/>} />
                <Route path="/Deleteprofile" element={<DeleteProfile deleteContact={deleteContact}/>} />
                <Route path="/Updateprofile" element={<UpdateContact data = {data} update={updateContact}/>} />
                </Routes>
            </main>
            </div>
        </>
    );
}

export default App;
