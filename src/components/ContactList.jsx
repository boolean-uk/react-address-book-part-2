import {useContext, useEffect, useState} from 'react';
import {ContactContext} from "../App.jsx";
import {Link} from "react-router-dom";

function ContactList() {
    const {contacts} = useContext(ContactContext);

    const [searchValue, setSearchValue] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const search = (event) => {
        setSearchValue(event.target.value);
        const filtered = contacts.filter(contact => {
                return `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchValue.toLowerCase());
            }
        );
        setFilteredContacts(filtered);
    }

    useEffect(() => {
        setFilteredContacts(contacts);
    }, [contacts]);

    return (
        <div id={"contact-list"}>
            <input id={"search-bar"} placeholder={"Search by name"} onChange={search} value={searchValue}/>
            {filteredContacts ? filteredContacts.map((contact, index) => (
                <div key={index}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <Link to={"/view/" + contact.id}><button>View</button></Link>
                </div>
            )) : <p>Loading...</p>}
        </div>
    );
}

export default ContactList;
