import React, {useContext} from 'react';
import ContactListItem from "./ContactListItem.jsx";
import {ContactContext} from "../../App.jsx";

function ContactList(props) {
    const {contacts} = useContext(ContactContext);
    return (
        <ul className="contact-list" >
            {contacts.map((item, index) => {
               return <ContactListItem key={"ContactListItem " + index} contact={item}/>
            })}
        </ul>
    );
}

export default ContactList;