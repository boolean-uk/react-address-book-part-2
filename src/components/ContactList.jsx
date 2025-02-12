import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
