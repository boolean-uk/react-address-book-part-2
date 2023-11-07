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
            <div>
                <h3>{singleContact.firstName} {singleContact.lastName}</h3>
                <ul className="contactDetails">
                    <li>City: {singleContact.city}</li>
                    <li>Street: {singleContact.street}</li>
                    </ul>
            </div>
        </>
    )
}

export default Contact