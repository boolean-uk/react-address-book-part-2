import React, { useEffect, useMemo, useState } from "react";
import { getAllContacts, getRandomPortraitURL } from "../services/apiService";
import { stringToSeed } from "../services/utils";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("tollov");
  const [contacts, setContacts] = useState([]);

  const values = useMemo(
    () => ({ username, setUsername, contacts, setContacts }),
    [username, contacts]
  );

  const initializeData = async () => {
    const contacts = await getAllContacts(username);
    setUserImages(contacts);
    setContacts(contacts);
  };

  const setUserImages = (contacts) => {
    contacts.forEach((contact) => {
      contact.profileImage = getRandomPortraitURL(
        stringToSeed(contact.email),
        contact.gender
      );
    });
  };

  useEffect(() => {
    initializeData();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
