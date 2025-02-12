import React, { useContext } from "react";
import { DataContext } from "../../DataProvider";
import ContactTile from "./Components/ContactTile";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";
function ContactList() {
const {contacts} = useContext(DataContext);
const [search, setSearch] = useState("");
    return (
        <>
        <SearchBar search={search} setSearch={setSearch}/>
        {contacts.map((contact, index) => {
            if (contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.lastName.toLowerCase().includes(search.toLowerCase()))
            return <ContactTile key={index} contact={contact} />
        }
        )}
        </>)
}

export default ContactList;