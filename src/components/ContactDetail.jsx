import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ContactDetail.css";
import ContactForm from "./ContactForm";

export default function ContactDetail() {
  const { state: contact } = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const deleteContact = async () => {
    const response = await fetch(
      `https://boolean-api-server.fly.dev/Sabbasn/contact/${contact.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="contact-detail">
      {!isEditing && (
        <>
          <h1>
            {contact.firstName} {contact.lastName}
          </h1>
          <p>Occupation: {contact.jobTitle}</p>
          <p>
            Address: {contact.street}, {contact.city}
          </p>
          <div className="contact-detail--btn-group">
            <button onClick={() => setIsEditing(true)} className="ab-btn">
              Edit
            </button>
            <button onClick={deleteContact} className="ab-btn">
              Delete
            </button>
          </div>
        </>
      )}
      {isEditing && <ContactForm contact={contact} />}
    </div>
  );
}
