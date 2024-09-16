import { Link, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { GoogleMap, LoadScript } from '@react-google-maps/api'

export default function ContactListItem({ contacts, handleDelete }) {
    const { contactId } = useParams()
    const navigate = useNavigate()
    const { 
        firstName, lastName, gender, email, jobTitle, 
        street, city, latitude, longitude, favouriteColour, 
        profileImage 
    } = contacts[contactId-1]

    return (
        <div className="contact-container" style={{ backgroundColor: favouriteColour }}>
        <div className="contact-details">
          <img src={profileImage} alt="Profile Image" />
          <p>First Name: {firstName} Last Name: {lastName}</p>
          <p>Address: {street}, {city}</p>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>Job Title: {jobTitle}</p>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Favourite Colour: {favouriteColour}</p>
          <LoadScript
                googleMapsApiKey="mrHackerNoAPIKeyHereForYou"
            >
                <GoogleMap
                    center={{lat: latitude, lng: longitude}}
                    zoom={8}
                    mapContainerStyle={{ height: '400px', width: '100%' }}
                />
          </LoadScript>
        </div>
        <br></br>
        <button className="button-50" onClick={() => {handleDelete; navigate(-1)}} type="delete">Delete this contact</button>
        <Link to={"/contacts"} className="button-50">Back to list</Link>
        </div>
    )
}
