import ContactListItem from "./components/ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list container">
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, idx) => (
          <ContactListItem key={idx} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
