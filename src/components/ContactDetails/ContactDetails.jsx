import "./ContactDetails.css"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { baseUrl } from '../../Utils/apiUtils.js';
import MapComponent from "./MapComponent/MapComponent.jsx"

const ContactDetails = () => {
    const [ contactInfo, setContactInfo] = useState({})
    const { id } = useParams()
    console.log(contactInfo)

    const retrieveContactDetails = async (id) => {
        await fetch(baseUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setContactInfo({...res}))
    }

    useEffect(() => {
        retrieveContactDetails(id)
    }, [id])

    return (
        <div className="content-container">
            <div className="title">Contact details</div>
            <div className="image-container">
                {contactInfo.profileImage && <img 
                    style={{
                        border:"10px solid", 
                        borderColor: contactInfo.favouriteColour}} 
                    src={contactInfo.profileImage}
                />}
                <div className="personal-information">
                    <span className="person-name">{contactInfo.firstName} {contactInfo.lastName}</span> <br/>
                    {contactInfo.jobTitle && <p>Occupation: {contactInfo.jobTitle}</p>}
                    {contactInfo.email && <p>Email: {contactInfo.email}</p>}
                    {contactInfo.gender && <p>Gender: {contactInfo.gender}</p>}
                </div>
            </div>
            { (contactInfo.street || contactInfo.city) && <div className="address-information">
                <p>Location: {contactInfo.street}, {contactInfo.city}</p>
                {(contactInfo.latitude || contactInfo.longitude) && <MapComponent lat={contactInfo.latitude} lng={contactInfo.longitude}/>}
            </div>}
        </div>
    )
}

export default ContactDetails