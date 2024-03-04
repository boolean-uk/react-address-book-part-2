import { useParams, useNavigate } from 'react-router-dom'
import { MapComponent } from './MapComponent'

const fetchContactByEmail = (email, contacts) => {
    return contacts.find(contact => contact.email === email)
}

export function ContactDetail({ contacts, setContacts }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const email = decodeURIComponent(id)
    const contact = fetchContactByEmail(email, contacts)

    if (!contact)
    {
        return <div>No contact found with that email address</div>;
    }

    else if (contact)
    {
        return (
            <div className='contact-detail' style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <img src={contact.profileImage} alt={`${contact.firstName} ${contact.lastName}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <p>Job Title: {contact.jobTitle}</p>
                <p>Email: {contact.email}</p>
                <p>Address: {contact.street}, {contact.city}</p>
                <p>Gender: {contact.gender}</p>
                <p>Favourite Colour: <span style={{ color: contact.favouriteColour }}>{contact.favouriteColour}</span></p>
                <p>Coordinates: Latitude {contact.latitude}, Longitude {contact.longitude}</p>
                <div>
                    {contact.latitude && contact.longitude && <MapComponent
                        latitude={contact.latitude}
                        longitude={contact.longitude}
                    />}
                </div>
                <button onClick={() => navigate('/create', { state: { updateContact: contact } })}>Edit</button>
                <button onClick={() => {
                    setContacts(contacts.filter(c => c.email !== contact.email))
                    navigate('/')
                }}>
                    Delete</button>
            </div>
        )
    }
}
