import ContactsListItem from "./ContactsListIteml";

function ContactsList(props) {
  //console.log("Props in ContactsList: ", props.contactsList);
  const { contactsList } = props;
  return (
    <ul>
      {contactsList.map((contact) => (
        <li key={contact.id}>
          <ContactsListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
