import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContactContext } from "../App";
import LocationMap from "./LocationMap";

function ContactDetails() {
    const { contactList, setContactList, url } = useContext(ContactContext);
    const { id } = useParams();
    const contact = contactList.find(c => c.id === Number(id));
    const navigate = useNavigate();

    if (!contact) return <p>Contact not found.</p>;

    const handleDelete = async () => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setContactList(prevList => prevList.filter(c => c.id !== Number(id)));
                navigate('/contacts');
            } else {
                console.error("Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div className="contact-details-container">
            <div className="left-column">
                <img className="profile-image" src={contact.profileImage} alt={`${contact.firstName} ${contact.lastName}`} />
                <h3>{contact.firstName} {contact.lastName}</h3>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Gender:</strong> {contact.gender}</p>
                <button onClick={handleDelete}>Delete Contact</button>
                <button onClick={() => navigate(`/edit/${contact.id}`)}>Edit Contact</button>
            </div>

            <div className="right-column">
                <p><strong>Street:</strong> {contact.street}</p>
                <p><strong>City:</strong> {contact.city}</p>
                <p><strong>Job:</strong> {contact.jobTitle}</p>
                <p className="favourite-color"><strong>Favourite Color:</strong> {contact.favouriteColour}</p>
                <LocationMap latitude={contact.latitude} longitude={contact.longitude} />
            </div>
        </div>
    );
}

export default ContactDetails;
