import React from "react";
import { Contact } from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, faMapMarkerAlt, faCity, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ContactDetailsProps {
  contact: Contact;
  onBack: () => void;
  onDelete: (id: number) => void
}

const ContactDetails = ({ contact, onBack, onDelete }: ContactDetailsProps) => {

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Stian96/contact/${contact.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(contact.id)
        onBack()
      }
      else {
        console.error("Failed to delete contact, id: ", contact.id)
      }
    }
    catch (error) {
      console.error("Failed to delete contact, id: ", contact.id)
    }
  }

  return (
    <div className="contact-card">
      <div className="contact-header">
        <FontAwesomeIcon icon={faUser} className="avatar" />
        <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
      </div>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Street:</strong> {contact.street}</p>
        <p><FontAwesomeIcon icon={faCity} /> <strong>City:</strong> {contact.city}</p>
      </div>
      <div className="button-group">
        <button className="back-btn" onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to contact list
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} /> Delete contact
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;