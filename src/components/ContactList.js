import { Link } from 'react-router-dom';

function ContactList({ contacts }) {
    return (
        <div className='menuRight'>
            <h1 className='headerRight'>
                Contacts
            </h1>
            {!contacts ? (
                <p>Loading...</p>
            ) : (
                contacts.map((contact, idx) => (
                    <div key={contact.id} className="name">
                        <div className="contactList">
                            <p>{contact.name}</p>
                            <Link to={`/contact-list/${idx}`} state={{ contact }}>
                                View
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ContactList;
