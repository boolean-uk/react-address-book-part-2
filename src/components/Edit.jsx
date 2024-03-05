import { useState} from "react";
import { useParams } from "react-router-dom";

export const Edit = ({ editContact, contacts }) => {
    const { id } = useParams();

    const contact = contacts.find((contact) => contact.id === parseInt(id));

    const [form, setForm] = useState({
        id: parseInt(id),
        firstName: contact.firstName,
        lastName: contact.lastName,
        gender: contact.gender,
        email: contact.email,
        jobTitle: contact.jobTitle,
        street: contact.street,
        city: contact.city,
        latitude: contact.latitude,
        longitude: contact.longitude,
        favouriteColour: contact.favouriteColour,
        profileImage: contact.profileImage,
    });

    const headers = ["First Name", "Last Name", "Gender", "Email", "Job Title", "Street", "City", "Latitude", "Longitude", "Favourite Colour", "Profile Image"];

    const handleSubmit = (e) => {
        e.preventDefault();
        editContact(form);
    }

    return (
        <form>
            <h2>Edit Contact</h2>
            {Object.keys(form).filter(key => key !== "id").map((key, index) => (
                <div className="form-item" key={key}>
                    <h3>{headers[index]}</h3>
                    <input
                        id={key}
                        name={key}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}
