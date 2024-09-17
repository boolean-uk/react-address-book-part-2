import React, { createContext, useState, useEffect } from "react";
import { fetchContacts } from "./helpers/APIRequester";
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};
