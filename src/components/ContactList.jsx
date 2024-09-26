import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
  const { contacts, setSearch } = props
  
  return (
    <div>
      <h1>Contacts</h1>
      <div className="contacts-filter">
        <h3>Search Contacts</h3>
        <input
            type="text"
            name="search"
            onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <ul>
        {contacts.map((contact, i) => (
            <ContactListItem key={i} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    setSearch: PropTypes.func.isRequired
}

export default ContactList
