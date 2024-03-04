import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  if (!contact) return <div>Loading ...</div>;

  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        Name: {contact.firstName} {contact.lastName}
        <br />
        Street: {contact.street}
        <br />
        City: {contact.city}
      </p>
    </div>
  );
}

export default ContactDetails;
