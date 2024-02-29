import "./App.css";
import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  // useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ContactView from "./components/ContactView";
import ContactForm from "./components/CreateContactForm";

const API_URL = "https://boolean-api-server.fly.dev/ssuihko/contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactsSave, setContactSave] = useState([]);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  useState(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setContactSave(data);
      });
  }, []);

  // search functionality
  const searchContacts = (val) => {
    if (val === "") {
      setFilter("");
      setContacts([...contactsSave]);
    } else {
      setFilter(val);
      const filteredContacts = contacts.filter((c) => {
        var toMatch =
          c.firstName.toLowerCase() + " " + c.lastName.toLowerCase();
        return toMatch.includes(filter.toLowerCase());
      });
      setContacts(filteredContacts);
    }
  };

  // communicate with APIs

  // POST
  const handleSubmitJson = (e, formData) => {
    e.preventDefault();

    console.log("in submit!");

    formData.longitude = parseFloat(formData.longitude);
    formData.latitude = parseFloat(formData.latitude);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(API_URL, postOptions)
      .then((res) => res.json())
      .then((newContact) => {
        setContacts([...contacts, newContact]);
      });

    navigate("/");
  };

  // DELETE
  const handleDeleteJson = (event, id) => {
    event.preventDefault();

    const DEL_URL = API_URL + "/" + id;

    const postOptions = {
      method: "DELETE",
      url: DEL_URL,
    };

    let updatedList = contacts.filter((item) => {
      if (parseInt(item.id) !== parseInt(id)) return item;
    });

    fetch(DEL_URL, postOptions)
      .then((res) => res.json())
      .then(() => {
        setContacts([...updatedList]);
      });

    navigate("/");
  };

  // UPDATE
  const handleUpdateJson = (e, formData) => {
    e.preventDefault();

    formData.longitude = parseFloat(formData.longitude);
    formData.latitude = parseFloat(formData.latitude);

    let updatedList = contacts.map((item) => {
      if (parseInt(item.id) === parseInt(formData.id)) {
        return { ...item, ...formData };
      }
      return item;
    });

    const PUT_URL = API_URL + "/" + formData.id;

    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(PUT_URL, putOptions)
      .then((res) => res.json())
      .then(() => {
        // console.log(updated); // might be possible to use updated instead?
        setContacts([...updatedList]);
      });

    navigate("/");
  };

  let filteredContacts = contacts;

  return (
    <div className="main-layout">
      <header>
        <h2>MENU</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Contacts List</Link>
            </li>
            <li>
              <Link to="/create">Add New Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <input
            className="search-bar"
            placeholder="Search contact"
            onChange={(e) => searchContacts(e.target.value)}
          />
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard contacts={filteredContacts}>/</Dashboard>}
        />
        <Route
          path="/create"
          element={
            <ContactForm
              handleJson={handleSubmitJson}
              isNew={true}
              contacts={contacts}
            >
              /
            </ContactForm>
          }
        />
        <Route
          path="update/:id"
          element={
            <ContactForm
              handleJson={handleUpdateJson}
              isNew={false}
              contacts={contacts}
            >
              /
            </ContactForm>
          }
        />
        <Route
          path="contact/:id"
          element={
            <ContactView contacts={contacts} handleDelete={handleDeleteJson}>
              /
            </ContactView>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
