import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProvider";
import Map from "./Map";

function ContactView() {
    const { id } = useParams();
    const { contacts, deleteContact } = useContext(DataContext);
    const navigate = useNavigate();
    const contact = contacts.find(c => c.id === Number(id));

    const handleDelete = () => {
        deleteContact(contact.id);
        navigate("/");
    }

    if (!contact) {
        return <div>Contact not found</div>;
    }

    return(
        <div>
            <div style={{
                border: "1px solid black", 
                padding: "10px", 
                backgroundColor: contact.favouriteColour ? contact.favouriteColour : "white"
            }}>
                <p>{contact.firstName + " " + contact.lastName}</p>
                <p>{contact.email}</p>
                <p>{contact.street + " " + contact.city}</p>
                <button onClick={() => navigate(`/contact/${contact.id}/edit`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <Map 
                latitude={contact.latitude} 
                longitude={contact.longitude}
            />
        </div>
    )
}

export default ContactView;