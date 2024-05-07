import { useState } from 'react'
import PropTypes from 'prop-types'
import ContactListItem from './components/ContactListItem'

function ContactList(props) {
    const { contacts } = props;
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter contacts based on search query
    const filteredContacts = contacts.filter(contact =>
        contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <>
            <h1>Contact list</h1>
            <input
                type="text"
                placeholder="Search for someone"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredContacts.map((contact, index) => (
                    <ContactListItem key={index} contact={contact} />
                ))}
            </ul>
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;