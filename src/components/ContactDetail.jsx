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
          <img src={contact.profileImage} />
          <h1>
            {contact.firstName} {contact.lastName}
          </h1>
          <p>Email: {contact.email}</p>
          <p>Occupation: {contact.jobTitle}</p>
          <p>
            Address: {contact.street}, {contact.city}
          </p>
          <p>Gender: {contact.gender}</p>
          <p>
            Favourite Color:
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: contact.favouriteColour,
              }}
            />
          </p>
          {/* Skjalg Eide Hodneland (github: spectraldesign) showed me this simple way of displaying latitude and longitude
          on google maps */}
          <iframe
            width="100%"
            height="500px"
            src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&output=embed&z=4`}
          />
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
