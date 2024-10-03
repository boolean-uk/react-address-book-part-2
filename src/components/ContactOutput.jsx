import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactMap from './ContactMap';


export default function ContactOutput() {
    const [contactOutput, setContactOutput] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${params.id}`).then((response) => response.json()).then(setContactOutput)
        .catch((err) => console.error('ERROR! Could not fetch contactsOutput', err))
    }, [params.id])


    return (
        <div className='contact-output'>
            <img src={contactOutput.profileImage} alt={`${contactOutput.firstName} ${contactOutput.lastName}`} />
            <h2>{contactOutput.firstName} {contactOutput.lastName}</h2>
            <h4>City: {contactOutput.city}</h4>
            <h4>Street: {contactOutput.street}</h4>
            <p>Email: {contactOutput.email}</p>
            {contactOutput.latitude && contactOutput.longitude && (
                <ContactMap
                    latitude={parseFloat(contactOutput.latitude)}
                    longitude={parseFloat(contactOutput.longitude)}
                    contact={contactOutput}
                />
            )}
        </div>
    )
}