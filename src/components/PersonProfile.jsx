import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../PersonProfile.css";

export default function PersonProfile(props) {
  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const { contacts } = props;

  useEffect(() => {
    if (contacts && id) {
        console.log("enters the if condition of use effect");
      const matchingContact = contacts.find((contact) => Number(contact.id) === Number(id));
      setContact(matchingContact);
    }
  }, [contacts, id]);

  console.log("contactsArray: " + contacts)
  console.log("contact: " + contact);
  console.log("id: " + id);

  if (!contact) {
    return <p>Currently loading the profile ...</p>;
  }

  return (
    <article className="profile-card">
      <div className="profile-header">
        <img src={contact.profileImage} alt={`${contact.firstName} ${contact.lastName}`} className="profile-image" />
        <div>
          <h2>{contact.firstName} {contact.lastName}</h2>
          <p>{contact.jobTitle}</p>
          <p>{contact.email}</p>
          <p>{contact.gender}</p>
        </div>
      </div>
      <div className="profile-details">
        <p>Location: {contact.street}, {contact.city}</p>
        <p>Favourite Color: <span style={{ backgroundColor: contact.favouriteColour, padding: '3px' }}></span></p>
      </div>
      <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
    </article>
  );
}
