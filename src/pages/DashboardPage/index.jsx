import { useEffect, useState } from "react";

import { getAllContactsAsync } from "../../utilities/api";

import MainHeader from "../../components/Headers/MainHeader";
import ContactList from "./components/ContactList";
import ContactListFilter from "./components/ContactListFilter";

import "./style.css";
import RecentContact from "./components/RecentContact";

const DashboardPage = ({ lastContact }) => {
    const [allContacts, setAllContacts] = useState([]);
    const [contactFilterType, setContactFilterType] = useState(null);
    const [filteredContacts, setFilteredContacts] = useState(allContacts);

    const lastContactDetails = allContacts.find(contact => contact.id == lastContact)

    useEffect(() => {
        getAllContactsAsync().then((result) => setAllContacts(result));
    }, [lastContact]);

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
        <div className="dashboard__container">
            <MainHeader />
            <ContactListFilter
                allContacts={allContacts}
                contactFilterType={contactFilterType}
                setContactFilterType={setContactFilterType}
            />
            <RecentContact lastContactDetails={lastContactDetails}/>
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default DashboardPage;
