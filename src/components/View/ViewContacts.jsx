import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export function ViewContacts({ contacts }) {
    const navigate = useNavigate();

    return (
        <div>
            {contacts.map((contact) => (
                <div key={contact.email} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <img src={contact.profileImage} alt={`${contact.firstName} ${contact.lastName}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <p>Job Title: {contact.jobTitle}</p>
                    <p>Email: {contact.email}</p>
                    <p>Address: {contact.street}, {contact.city}</p>
                    <p>Gender: {contact.gender}</p>
                    <p>Coordinates: Latitude {contact.latitude}, Longitude {contact.longitude}</p>
                    <p>Favourite Colour: <span style={{ color: contact.favouriteColour }}>{contact.favouriteColour}</span></p>
                    <button onClick={() => navigate(`/view/${encodeURIComponent(contact.email)}`)}>View Details</button>
                </div>
            ))}
        </div>
    );
}

ViewContacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
