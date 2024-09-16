import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function ContactListItemUpdate({ contacts, handleUpdate }) {
    const { contactId } = useParams();
    const navigate = useNavigate();

    const [editedContact, setEditedContact] = useState({ ...contacts[contactId - 1] })

    const attributes = [
        "firstName", "lastName", "gender", "email", "jobTitle",
        "street", "city", "latitude", "longitude", "favouriteColour",
        "profileImage"
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedContact(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="contact-container" style={{ backgroundColor: editedContact.favouriteColour }}>
            {attributes.map((attribute) => (
                <div className="form-row" key={attribute}>
                    <label htmlFor={attribute}>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}:</label>
                    <input
                        type={attribute === "email" ? "email" : attribute === "latitude" || attribute === "longitude" ? "number" : "text"}
                        id={attribute}
                        name={attribute}
                        value={editedContact[attribute]}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
            <button className="button-50" onClick={() => { handleUpdate; navigate(-1) }} type="update">Update Contact</button>
            <Link to={"/contacts"} className="button-50">Back to list</Link>
        </div>
    )
}
