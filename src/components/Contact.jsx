import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { get } from "../ultity/client"
import { URL, remove } from "../ultity/client"




function Contact() {
    const [singleContact, setSingleContact] = useState([])

    const { id } = useParams()
    
    console.log(singleContact)
    const navigate = useNavigate()

    const handleRemove = () => {
        remove(`${URL}/${id}`)
        .then(navigate("/contacts"))
    }

    useEffect(()=> {
        get(`${URL}/${id}`)
        .then(data => setSingleContact(data))
    },[])

    return (
        <>
            <div className="contact">
                <h2>{singleContact.firstName} {singleContact.lastName}</h2>
                <section className="contactDetails">
                    <p><strong>City: </strong>{singleContact.city}</p>
                    <p><strong>Street: </strong>{singleContact.street}</p>
                    <button 
                    className="remove-contact-button"
                    onClick={handleRemove}>Remove Contact</button>
                    </section>
            </div>
        </>
    )
}

export default Contact