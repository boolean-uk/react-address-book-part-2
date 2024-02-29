import { useParams } from "react-router-dom"
import ContactForm from "./Form"
import { useEffect, useState } from "react"

function UpdateContact({contacts, UpdateContact}){
    const {id} = useParams()

    const contact = contacts.find((x) => `${x.id}` === `${id}`)
    if (!contact) return (
        <h1>Contact doesn't exist</h1>
    )

    const [formData, setFormData] = useState(contact)

    const handleInput = (event) =>{
        const {name, value} = event.target
        if (name){
            setFormData({...formData, [name] : value})
        }   
    }

    
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        UpdateContact(id, formData)
    }


    return(
        <ContactForm handleInput={handleInput} handleOnSubmit={handleOnSubmit} formData={formData}/>
    )
}

export default UpdateContact