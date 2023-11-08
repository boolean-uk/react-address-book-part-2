import { useEffect, useState } from "react";

import { getAllContactsAsync } from "../../utilities/api";

import MainHeader from "../../components/Headers/MainHeader";
import ContactList from "./components/ContactList";
import ContactListFilter from "./components/ContactListFilter";

import "./style.css";

const DashboardPage = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [contactFilterType, setContactFilterType] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  useEffect(() => {
    getAllContactsAsync().then((result) => setAllContacts(result));
  }, []);

  useEffect(() => {
    if (contactFilterType) {
      const { optionGroup, value } = contactFilterType;
      setFilteredContacts(
        allContacts.filter((contact) => contact[optionGroup] === value)
      );
    } else {
      setFilteredContacts(allContacts);
    }
  }, [contactFilterType, allContacts]);

  return (
    <>
      <MainHeader />
      <ContactListFilter
        allContacts={allContacts}
        contactFilterType={contactFilterType}
        setContactFilterType={setContactFilterType}
      />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default DashboardPage;
