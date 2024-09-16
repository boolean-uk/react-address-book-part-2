import ContactsListItem from "./ContactsListItem.jsx";

function ContactsList(props) {
  const { contacts } = props;

  console.log(contacts)

  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactsListItem
          key={index}
          contact={contact}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
