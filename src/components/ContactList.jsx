import ContactListItem from "./ContactListItem.jsx";
function ContactList({ contacts }) {
  return (
    <>
      <section>
        <h2>Contacts</h2>
        <ul>
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactListItem contact={contact} key={contact} />
            ))
          ) : (
            <li>No users available</li>
          )}
        </ul>
      </section>
    </>
  );
}

export default ContactList;
