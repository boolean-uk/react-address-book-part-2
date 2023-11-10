import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <ul className="contact__list">
      {contacts.map((contact, index) => (
        <ContactListItem key={`contactList-${index}`} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
