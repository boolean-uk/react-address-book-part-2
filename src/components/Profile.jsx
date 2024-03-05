import { useParams, Link } from "react-router-dom";
import '/src/styling/Profile.css'; // Import CSS file for styling

export const Profile = ({ contacts, removeContact }) => {
    const { id } = useParams();

    const contact = contacts.find((contact) => contact.id === parseInt(id));

    if (!contact) { return <h2>Contact not found</h2> }
    
    // Style object for dynamically setting the border color
    const profileStyle = {
        borderColor: contact.favouriteColour, // Border color from the person's favorite color
    };

    return (
        <div className="profile-container" style={profileStyle}>
            <img src={contact.profileImage} alt="Profile" className="profile-image" />

            <h2 style={{ color: contact.favouriteColour }}>{contact.firstName} {contact.lastName}</h2>
            <p>Gender: {contact.gender}</p>
            <p>Email: {contact.email}</p>
            <p>Job Title: {contact.jobTitle}</p>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>
            <p>Latitude: {contact.latitude}</p>
            <p>Longitude: {contact.longitude}</p>
            {/* <p>Favourite Colour: {contact.favouriteColour}</p> */}
          
            <div className="button-container">
                <Link to={`/${contact.id}/edit`} className="edit-link">Edit</Link>
                <button
                    onClick={() => {
                        removeContact(contact.id);
                    }}
                    className="delete-button"
                >Delete</button>
            </div>
        </div>
    );
}
