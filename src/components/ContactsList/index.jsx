import ContactsListItem from "./ContactsListItem";
function ContactsList(props) {
    const { contacts } = props
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <ContactsListItem key={index} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
  export default ContactsList;