import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import DisplayMap from "./components/DisplayMap";
import { readableColor } from 'polished';

import "./styles.css"

function ViewContact({ contacts, deleteContact }) {
    const [contact, setContact] = useState(null)
    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        if (contacts && id) {
          setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
    }, [contacts, id]);

    const handleClick = (event) => {
        event.preventDefault()
        const { name } = event.target

        if (name === "delete") {
            deleteContact(contact.id)
            navigate("/")
        }
        else if (name === "update") {
            navigate(`/update/${contact.id}`)
        }
    }

    if (!contact) return <p>Contact Not Found</p>

    return (
        <div className="contact-view-container">
            {/* Setting background color to favourite, and text color to readable color on top of that (white or black) */}
            <div style={{backgroundColor: contact.favouriteColour, width: "370px", padding: "15px", color: readableColor(contact.favouriteColour)}}>
                <h1>{contact.firstName} {contact.lastName}</h1>
                {contact.img !== "" && <img src={contact.profileImage} width="100px" />}
                <h3>Details:</h3>
                <p>Email: {contact.email}</p>
                <p>Address: {contact.street}, {contact.city}</p>
                <p>Gender: {contact.gender}</p>
                <p>Job Title: {contact.jobTitle}</p>
            </div>
            {/* Display map of lat lng coordinates */}
            <DisplayMap lat={contact.latitude} lng={contact.longitude} />
            <div className="contact-view-buttons">
                <button className="contact-view-delete-button" name="delete" onClick={handleClick}>Delete Contact</button>
                <button className="contact-view-update-button" name="update" onClick={handleClick}>Update Contact</button>
            </div>
        </div>
    )
}

export default ViewContact