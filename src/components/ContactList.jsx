//UNTESTED DRAFT
import ContactsListItem from "./ContactListItem";

export default function ContactsList(props) {
  const {
    contacts,
    setReloadingNecessary,
    deleteContact,
    filteredContacts,
    displayFilteredContacts,
  } = props;

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {displayFilteredContacts
          ? filteredContacts.map((contact, index) => {
              return (
                <ContactsListItem
                  key={index}
                  contact={contact}
                  setReloadingNecessary={setReloadingNecessary}
                  deleteContact={deleteContact}
                />
              );
            })
          : contacts.map((contact, index) => {
              return (
                <ContactsListItem
                  key={index}
                  contact={contact}
                  setReloadingNecessary={setReloadingNecessary}
                  deleteContact={deleteContact}
                />
              );
            })}
      </ul>
    </>
  );
}
