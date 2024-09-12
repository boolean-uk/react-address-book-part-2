import ContactsListItem from "./ContactsListitem";

function ContactsList(props) {
  const { contacts,filter } = props;
  return (
    <>
      {contacts.map((contact) => (
        (contact.firstName.toLowerCase().includes(filter)|| contact.lastName.toLowerCase().includes(filter)) &&<ContactsListItem key={contact.id} contact={contact} />
      ))}
    </>
  );
}
export default ContactsList;
