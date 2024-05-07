import ContactListItem from "./ContactListItem";


export default function ContactList(props) {
  const { contacts } = props;

  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </ul>
  );
}
