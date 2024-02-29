import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactForm from "./Form"

const InitialData = {
    firstName : "",
    lastName : "",
    city:"",
    street:"",
    email:"",
    color:"#000000"
}

function CreateContact({addContact, oldContact}){


    const [formData, setFormData] = useState(InitialData)
    const navigate = useNavigate()

    if (oldContact){
        setFormData(oldContact)
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault()
        addContact(formData)
        navigate("/")
    }

    const handleInput = (event) =>{
        const {name, type, value} = event.target
        if (name){
            setFormData({...formData, [name] : value})
        }   
    }
    return(
        <ContactForm handleOnSubmit={handleOnSubmit} handleInput={handleInput} formData={formData}/>
    )
}

export default CreateContact