import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactProfile = (props) => {
  const [contact, setContact] = useState(null);

  const { contacts } = props;

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const currentContact = contacts.find(
      (contact) => contact.id === Number(id)
    );
    setContact(currentContact);
  }, [contacts, id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="contact-profile container">
      <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
      <div className="contact-details-container">
        <div className="contact-details">
          <p>
            <b>Gender</b>: {contact.gender}
          </p>
          <p>
            <b>Address</b>: {`${contact.street}, ${contact.city} `}
          </p>
          <p>
            <b>Job</b>: {contact.jobTitle}
          </p>
          <p>
            <b>Email</b>: {contact.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;
