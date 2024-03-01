import "./App.css";
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  // useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ContactView from "./components/ContactView";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

const API_URL = "https://boolean-api-server.fly.dev/ssuihko/contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  // fetch data
  useState(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data); // all contacts
        setFilteredContacts(data); // for storing the filtered contacts
      });
  }, []);

  // search functionality
  const searchContacts = (val) => {
    if (val === "") {
      setFilter("");
    } else {
      setFilter(val);
    }
  };

  useEffect(() => {
    var filteredContacts = contacts.filter((c) => {
      var toMatch = c.firstName.toLowerCase() + " " + c.lastName.toLowerCase();
      if (filter === "") {
        return contacts;
      }
      return toMatch.includes(filter.toLowerCase());
    });
    setFilteredContacts(filteredContacts);
  }, [filter, contacts]);

  // communicate with the API

  // POST
  const handleCreateContact = (formData) => {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then((newContact) => {
        setContacts([...contacts, newContact]);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE
  const handleDeleteContact = (id) => {
    const DEL_URL = API_URL + "/" + id;

    const deleteOptions = {
      method: "DELETE",
      url: DEL_URL,
    };

    let updatedList = contacts.filter((item) => {
      if (parseInt(item.id) !== parseInt(id)) return item;
    });

    fetch(DEL_URL, deleteOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then(() => {
        setContacts([...updatedList]);
        navigate("/");
      })
      .catch((err) => {
        console.log("error occured: ", err);
      });
  };

  // UPDATE
  const handleUpdateContact = (formData) => {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then(() => {
        setContacts([...updatedList]);
        navigate("/");
      })
      .catch((err) => {
        console.log("error occured: ", err);
      });
  };

  return (
    <div className="main-layout">
      <Header searchContacts={searchContacts} />
      <Routes>
        <Route
          path="/"
          element={<Dashboard contacts={filteredContacts}>/</Dashboard>}
        />
        <Route
          path="/create"
          element={
            <ContactForm
              handleEvent={handleCreateContact}
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
              handleEvent={handleUpdateContact}
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
            <ContactView contacts={contacts} handleDelete={handleDeleteContact}>
              /
            </ContactView>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
