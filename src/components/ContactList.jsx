//UNTESTED DRAFT
import ContactsListItem from "./ContactListItem";

export default function ContactsList(props) {
  const { contacts, setReloadingNecessary, deleteContact } = props;


  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => {
          return (
          <ContactsListItem
            key={index}
            contact={contact}
            setReloadingNecessary={setReloadingNecessary}
            deleteContact={deleteContact}
          />
        )})}
      </ul>
    </>
  );
}
