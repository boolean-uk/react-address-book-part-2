import ContactListItem from "./ContactListItem";

const ContactList = ({ allContacts }) => {
  return (
    <ul>
      {allContacts.map((contact, index) => (
        <ContactListItem key={`contactList-${index}`} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
