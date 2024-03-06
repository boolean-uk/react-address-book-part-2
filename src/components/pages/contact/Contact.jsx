import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import "./Contact.css";
import { blankContact } from "../../../services/defaultValues";
import Datapoint from "../../ui/common/Datapoint";
import BackButton from "../../ui/common/BackButton";

function Contact(props) {
  const { contacts } = useContext(UserContext);
  const [contact, setContact] = useState(blankContact);
  const { id } = useParams();

  useEffect(() => {
    if (contact !== undefined && contacts.length > 1) {
      setContact(contacts.find((c) => c.id.toString() === id.toString()));
    }
  }, [contacts]);

  return (
    <>
      <div className="header">
        <BackButton />
      </div>
      <div className="contact-page">
        <div className="image-column">
          <img
            id="profile-image"
            src={contact.profileImage}
            alt={`${contact.firstName} ${contact.lastName}`}
          />
        </div>
        <div className="unit-profile-array">
          <h2
            id="name"
            style={{ borderBottom: `7.5px solid ${contact.favouriteColour}` }}
          >{`${contact.firstName} ${contact.lastName}`}</h2>
          <Datapoint label="Email" value={contact.email} />
          <Datapoint label="Gender" value={contact.gender} />
          <Datapoint label="Job title" value={contact.jobTitle} />
          <Datapoint label="Street" value={contact.street} />
          <Datapoint label="city" value={contact.city} />
          <Datapoint label="Latitude" value={contact.latitude} />
          <Datapoint label="Longitude" value={contact.longitude} />
          <Datapoint label="Favorite color" value={contact.favouriteColour} />
        </div>
      </div>
    </>
  );
}

Contact.propTypes = {};

export default Contact;
