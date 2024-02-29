import ContactListItem from "./ContactListItem";

function ContactList(props) {
  const { contacts } = props;

  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
