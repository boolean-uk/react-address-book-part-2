import { useState } from "react";
import Contact from "./Contact";

const ContactsList = ({ contacts }) => {
    const [searchbar, setSearchbar] = useState("");

    const updateSearch = (event) => {
        setSearchbar(event.target.value);
    };

    const filteredContacts = contacts.filter((c) =>
        (c.firstName + " " + c.lastName)
            .toLowerCase()
            .includes(searchbar.toLowerCase())
    );

    return (
        <>
            <div className="search">
                <input
                    className="search-bar"
                    placeholder="Search contacts"
                    value={searchbar}
                    onChange={updateSearch}
                />
            </div>
            <h2>Contacts</h2>
            <ul className="contacts-list">
                {filteredContacts.length === 0 ? (
                    <p>No Contacts!</p>
                ) : (
                    filteredContacts.map((contact, i) => (
                        <Contact key={i} data={contact} />
                    ))
                )}
            </ul>
        </>
    );
};

export default ContactsList;
