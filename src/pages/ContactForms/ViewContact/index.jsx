import PropTypes from 'prop-types'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ViewContact(props) {
    const { contacts, deleteContact } = props
    const [contact, setContacts] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const editLink = "/edit/"+id

    useEffect(() => {
        const foundContact = contacts.find(c => c.id.toString() === id)
        setContacts(foundContact)
    }, [contacts, id])

    const handleDelete = async () => {
        if (!contact) return; // Ensure contact exists

        const success = await deleteContact(contact.id);
        if (success) {
            navigate("/");
        } else {
            console.error("Failed to delete contact");
        }
    }

    if (!contact) {
        return <div>Contact not found</div>
    }

    const colourStyle = {
        backgroundColor: contact.favouriteColour
    }

    return (
        <>
            <h1>{contact.firstName + " " + contact.lastName}</h1>
            <img src={contact.profileImage} width="100px" alt="Contact image" />
            <p><b>Street: </b>{contact.street}</p>
            <p><b>City: </b>{contact.city}</p>
            <p><b>Gender: </b>{contact.gender}</p>
            <p><b>Email: </b>{contact.email}</p>
            <p><b>Job title: </b>{contact.jobTitle}</p>
            <p><b>Favourite Colour: </b>{contact.favouriteColour}</p>
            <div className="color-square" style={colourStyle}></div><br/><br/>

            <iframe width="50%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
            
            <div>   
                <Link to={editLink}><button>Edit</button></Link>         
                <button onClick={handleDelete}>Delete</button>
            </div>
            <br /><br />
        </>
    )
}

export default ViewContact

ViewContact.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}