import "./SingleContactView.css";
import { useParams } from "react-router-dom";
function SingleContactView({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id.toString() === id);

  if (!contact) {
    return <div className="contact-not-found">Contact not found</div>;
  }
  return (
    <div className="contact-view">
      <img
        src={contact.profileImage}
        alt={`${contact.firstName} ${contact.lastName}`}
        className="contact-image"
      />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Job Title:</strong> {contact.jobTitle}
      </p>
      <p>
        <strong>Address:</strong> {contact.street}, {contact.city}
      </p>
      <p>
        <strong>Coordinates:</strong> {contact.latitude}, {contact.longitude}
      </p>
      <p
        style={{ backgroundColor: contact.favouriteColour }}
        className="favourite-colour"
      >
        Favourite Colour
      </p>
    </div>
  );
}

export default SingleContactView;
