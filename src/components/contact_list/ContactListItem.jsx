import React from 'react';
import {Link} from "react-router-dom";

function ContactListItem(props) {
    const {contact} = props;
    return (
        <Link to={`/contacts/${contact.id}`}>
            {`${contact.firstName} ${contact.lastName}`}
        </Link>
    );
}

export default ContactListItem;