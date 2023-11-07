import { useState, useParams, useEffect } from "react"

function Contact() {
    const [singleContact, setSingleContact] = useState([])

    // const { id } = useParams()
    
    console.log(singleContact)


    useEffect(()=> {
        fetch(`https://boolean-api-server.fly.dev/PeachyOmnivore/contact/3`)
        .then(res => res.json())
        .then(data => setSingleContact(data))
    },[])

    return (
        <>
            <div>
                <h3>{singleContact.firstName} {singleContact.lastName}</h3>
                <ul className="contactDetails">
                    <li>Email: {singleContact.email}</li>
                    <li>Job title: {singleContact.jobTitle}</li>
                    <li>Street: {singleContact.street}</li>
                    <li>City: {singleContact.city}</li>
                    <li>Gender: {singleContact.gender}</li>
                    </ul>
            </div>
        </>
    )
}

export default Contact