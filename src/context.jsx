import { createContext, useState, useEffect } from "react";

export const ContactBookContext = createContext();

export const ContactBookProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/SimpFred/contact"
    );
    const data = await response.json();
    setContacts(data);
  };

  const postContact = async (contact) => {
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/SimpFred/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    );
    const data = await response.json();
    setContacts((prevContacts) => [...prevContacts, data]);
  };

  const updateContact = async (id, updatedContact) => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/SimpFred/contact/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      }
    );
    const data = await response.json();
    setContacts((prevContacts) =>
      prevContacts.map((contact) => (contact.id === id ? data : contact))
    );
  };

  const deleteContact = async (id) => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/SimpFred/contact/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== data.id)
    );
  };

  return (
    <ContactBookContext.Provider
      value={{
        contacts,
        getContacts,
        postContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactBookContext.Provider>
  );
};
