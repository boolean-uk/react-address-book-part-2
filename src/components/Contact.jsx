
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DisplayContext } from '../App.jsx'

function Contact({ contact, showDetails }) {

    const { setDisplayForm } = useContext(DisplayContext)

    const handleSetDisplayForm = () => {
        setDisplayForm(true)
        localStorage.setItem('id', contact.id)
    }

    const handleDelete = async () => {

        const deleteUrl = localStorage.getItem('url') + `/${contact.id}`

        try {
            await fetch(deleteUrl, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not delete contact')
                }
            })
            .then(data => {
                console.log('Contact deleted successfully', data)
            })
        } catch(error){
            console.error('Error during deletion:', error)
        }
    }

    return (
        <>
        {showDetails 
        ?
        <div className="extra-details">
            <h2 className="name">{contact.firstName + " " + contact.lastName}</h2>
            <img src={contact.profileImage} alt="No picture found"/>
            <h4>Email: {contact.email}</h4>
            <h4>Job: {contact.jobTitle}</h4>
            <h4>Street: {contact.street}</h4>
            <h4>City: {contact.city}</h4> 
            <h4>Gender: {contact.gender}</h4>
            <h4>Latitude: {contact.latitude}</h4>
            <h4>Longitude: {contact.longitude}</h4>
            <h4>Favourite Colour: {contact.favouriteColour}</h4>
            <h4>id: {contact.id}</h4>
        </div>
        : 
        <div className="normal-details">
            <Link to={`/contact/${contact.id}`}>
                <h2 className="name">{contact.firstName + " " + contact.lastName}</h2>
            </Link>
            <img src={contact.profileImage} alt="No picture found"/>
            <button className="button" onClick={handleDelete}>Delete contact</button>
            <button className="button" onClick={handleSetDisplayForm}>Update contact</button>
        </div>
        }
        </>
    )
}

export default Contact