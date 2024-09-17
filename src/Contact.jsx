import PropTypes from "prop-types"
import { useNavigate, useParams } from "react-router-dom"



function Contact({contacts, deleteContact}){

    const {id} = useParams()
    const navigate = useNavigate()


    const contact = contacts.find((x) => `${x.id}` === `${id}`)
    if (!contact) return (
        <h1>Contact doesn't exist</h1>
    )
    
    const updateContact = () =>{
        console.log("Update contact")
        navigate(`/update/${id}`)
    }

    return (
        <div style={{color:contact.favouriteColour}}>
            <h1 className="ContactName" >{contact.firstName} {contact.lastName}</h1>
            <img src={contact.profileImage}/>
            <h1 className="ContactInfo">Email: {contact.email}</h1>
            <h1 className="ContactInfo">Job Title: {contact.jobTitle}</h1>
            <h1 className="ContactInfo">Gender: {contact.gender}</h1>
            <h1 className="ContactInfo">Street: {contact.street}</h1>
            <h1 className="ContactInfo">City: {contact.city}</h1>
            <h1 className="ContactInfo">Latitude: {contact.latitude}</h1>
            <h1 className="ContactInfo">Longitude: {contact.longitude}</h1>
            <button onClick={() => {deleteContact(contact)}}>Delete</button>
            <button onClick={updateContact}>Update</button>
        </div>
    )
}

Contact.propTypes = {
    contacts: PropTypes.array
}

export default Contact