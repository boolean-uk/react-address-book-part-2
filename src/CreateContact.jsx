import { useState } from "react"
import { useNavigate } from "react-router-dom"

const InitialData = {
    firstName : "",
    lastName : "",
    city:"",
    street:"",
}

function CreateContact({addContact}){

    const [formData, setFormData] = useState(InitialData)
    const navigate = useNavigate()

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
        <form className="form" onSubmit={handleOnSubmit}>
            <label>Firstname: <input 
            type="text" 
            name="firstName" 
            value= {formData.firstName}
            onChange={handleInput}/></label>
            <label>Lastname: <input 
            type="text" 
            name="lastName" 
            value= {formData.lastName}
            onChange={handleInput}/></label>
            <label>City: <input 
            type="text" 
            name="city" 
            value= {formData.city}
            onChange={handleInput}/></label>
            <label>Street: <input 
            type="text" 
            name="street" 
            value= {formData.street}
            onChange={handleInput}/></label>
            <input className="form_submit" type="submit" value="Submit form"/>

        </form>
    )
}

export default CreateContact