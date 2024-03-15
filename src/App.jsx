import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ContactsListPage from "./ContactsListPage";
import ContactDetailsPage from "./ContactDetailsPage";
import CreateNewContactFormPage from "./CreateNewContactFormPage";
import { useEffect, useState } from "react";

function App() {
  const [contactInfoList, setContactInfoList] = useState([]);
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/MackanPalm/contact")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setContactInfoList(data);
      });
  }, []);
  return (
    <div className="parent">
      <div className="links">
        <ul>
          <li>
            <Link to="/">Contacts</Link>
          </li>
          <li>
            <Link to="/contacts/newcontact">New Contact</Link>
          </li>
        </ul>
      </div>
      <div className="side-by-side-flex main">
        <Routes>
          <Route
            path="/"
            element={<ContactsListPage contactInfoList={contactInfoList} />}
          />
          <Route
            path="/contacts/:id"
            element={<ContactDetailsPage contactInfoList={contactInfoList} />}
          />
          <Route
            path="/contacts/newcontact"
            element={
              <CreateNewContactFormPage
                contactInfoList={contactInfoList}
                setContactInfoList={setContactInfoList}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
