import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { get } from "../ultity/client"




function Contact() {
    const [singleContact, setSingleContact] = useState([])

    const { id } = useParams()
    
    console.log(singleContact)


    useEffect(()=> {
        get(`https://boolean-api-server.fly.dev/PeachyOmnivore/contact/${id}`)
        .then(data => setSingleContact(data))
    },[])

    return (
        <>
            <div className="contact">
                <h2>{singleContact.firstName} {singleContact.lastName}</h2>
                <section className="contactDetails">
                    <p><strong>City: </strong>{singleContact.city}</p>
                    <p><strong>Street: </strong>{singleContact.street}</p>
                    <button className="remove-contact-button">Remove Contact</button>
                    </section>
            </div>
        </>
    )
}

export default Contact