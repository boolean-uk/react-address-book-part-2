import { useParams } from "react-router-dom";
import DeleteContact from "./DeleteContact";
import UpdateContact from "./UpdateContact";

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === Number(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Email: {contact.email}</p>
      <p>Job Title: {contact.jobTitle}</p>
      <p>Gender: {contact.gender}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <p>Favourite Colour: {contact.favouriteColour}</p>
      <img src={contact.profileImage} alt="Profile" />
      <DeleteContact id={contact.id} />
      <UpdateContact contact={contact} />
    </div>
  );
};

export default ContactDetails;
