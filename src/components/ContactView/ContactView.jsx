import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../App';


function ContactView() {
    const {contacts} = useContext(AppContext);
    const [contact, setContact] = useState(null);

    const {id} = useParams();
    useEffect(() => {
        let c = contacts.find(x => x.id == id);
        if(c)
            setContact(c);
    },
    [id,contacts]
    );
    if(contact == null) return (<>Loading...</>);
    
    const getLabeled = (labelName, value) => {
        return (
            <div className="contactField">
                <label>{labelName}</label>
                <p>{`${value}`}</p>
            </div>
        )
    }

    return (
        <div className='mb-3'>
            <h3>ContactView</h3>
            <div className="contactField_pic">
                <img src={contact.profileImage}/>
            </div>
            <div>
                {getLabeled("name", `${contact.firstName} ${contact.lastName}`)}
                {getLabeled("gender", `${contact.gender}`)}
                
                <div className="contactField">
                    <label>Email</label>
                    <p style={{textTransform: 'lowercase'}}> {contact.email} </p>
                </div>

                {getLabeled("address", `${contact.street}, ${contact.city}`)}
                {getLabeled("job title", `${contact.jobTitle}`)}

                <div className="contactField">
                    <label>Favorite Color</label>
                    <p style={{backgroundColor: contact.favouriteColour}}> {contact.favouriteColour} </p>
                </div>
                {getLabeled("latitude", `${contact.latitude}`)}
                {getLabeled("longitude", `${contact.longitude}`)}
                <iframe  src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`} width="600" height="450" ></iframe>
            </div>
        </div>
    )
}

export default ContactView