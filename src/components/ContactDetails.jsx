export default function ContactDetails({ contact }) {
  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
}
