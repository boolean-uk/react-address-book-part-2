import React from "react";
import { Link } from "react-router-dom";

function ContactTile({ contact }) {
    return (
        <div style = {{border: "1px solid black", padding: "10px", backgroundColor: contact.favouriteColour ? contact.favouriteColour : "white"}}>
            <p>{contact.firstName + " " + contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>
        </div>
    )
}

export default ContactTile;