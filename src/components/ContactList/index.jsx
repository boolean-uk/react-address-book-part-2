import ContactListItem from "./ContactListItem.jsx";
function ContactList(props) {
  const { contacts } = props;
  return (
    <ul className="contact-list">
      {contacts.map((item, index) => (
        <ContactListItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default ContactList;
