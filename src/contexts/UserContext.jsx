import React, { useEffect, useMemo, useState } from "react";
import {
  getAllContacts,
  getContact,
  getRandomPortraitURL,
  postContact,
  putContact,
} from "../services/apiService";
import { stringToSeed } from "../services/utils";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("tollov");
  const [contacts, setContacts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = async () => {
    setIsFetching(true);
    const contacts = await getAllContacts(username);
    setUserImages(contacts);
    setContacts(contacts);
    setIsFetching(false);
  };

  const setUserImages = (contacts) => {
    contacts.forEach((contact) => {
      contact.profileImage = getRandomPortraitURL(
        stringToSeed(contact.email),
        contact.gender
      );
    });
  };

  const insertContact = async (data) => {
    await postContact(username, data);
    fetchData();
  };

  const updateContact = async (data) => {
    await putContact(username, data.id, data);
    fetchData();
  };

  const getContactById = (id) => {
    return contacts.find((c) => c.id.toString() === id.toString());
  };

  const values = useMemo(
    () => ({
      contacts,
      isFetching,
      insertContact,
      updateContact,
      getContactById,
    }),
    [username, contacts, isFetching]
  );

  useEffect(() => {
    fetchData();
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
