import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../DataContext"

function ContactPreview(props) {
    const { contacts, targetContact, setTargetContact } = useContext(DataContext)
    const { id } = useParams()

    
    useEffect(() =>{
        setTargetContact(contacts.find(c => c.id === Number(id)))
        console.log(targetContact)
    },[])
    console.log(targetContact)


    return(<div>
        {targetContact && <div className="contact-preview">
            {console.log(targetContact)}
             <h1>{targetContact.name}</h1>
             <ul>
                <li>City: {targetContact.address.city}</li>
                <li>Street: {targetContact.address.street}</li>
                <li>Zipcode: {targetContact.address.zipcode}</li>
             </ul>
        </div>}
        </div>
    )
}
export default ContactPreview