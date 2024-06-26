import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ContactsList from "./ContactsList";
import ContactDetails from "./ContactDetails";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";

function getClassName({ isActive }) {
  if (isActive) {
    return "active";
  }
}

export default function App() {
  const [contactsList, setContactsList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Hamada-AB/contact")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setContactsList(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [contactsList]);

  return (
    <>
      <nav>
        <h1>Menu</h1>
        <ul>
          <li>
            <NavLink className={`nav-link ${getClassName}`} to="/">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                  clipRule="evenodd"
                />
              </svg>
              Contact List
            </NavLink>
          </li>
          <li>
            <NavLink className={`nav-link ${getClassName}`} to="/contact/new">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        {isLoading && <p>Loading...</p>}
        <Routes>
          <Route
            path="/"
            element={<ContactsList contactsList={contactsList} />}
          />

          <Route
            path="/contacts/:id"
            element={
              <ContactDetails
                contactsList={contactsList}
                setContactsList={setContactsList}
              />
            }
          />

          <Route
            path="/contact/new"
            element={
              <CreateContact
                contactsList={contactsList}
                setContactsList={setContactsList}
              />
            }
          />

          <Route
            path="/contact/edit"
            element={
              <EditContact
                contactsList={contactsList}
                setContactsList={setContactsList}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}
