import { useParams } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(c => c.id === parseInt(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
};

export default ContactDetail;
