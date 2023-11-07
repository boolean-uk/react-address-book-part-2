import { useEffect, useState } from "react";

import { getAllContactsAsync } from "../../utilities/api";

import MainHeader from "../../components/Headers/MainHeader";
import ContactList from "./components/ContactList";

const DashboardPage = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    getAllContactsAsync().then((result) => setAllContacts(result));
  }, []);

  return (
    <div>
      <MainHeader />
      <ContactList allContacts = {allContacts} />
    </div>
  );
};

export default DashboardPage;
