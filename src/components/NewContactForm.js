import { useEffect, useState } from "react"
import DataContext from "../DataContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
function NewContactForm() {

    const [newContact, setNewContact] = useState({})
    const [newAddress, setNewAddress] = useState({})
    const {contacts, setContacts} = useContext(DataContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        if(event.target.name === "name") {
            setNewContact({...newContact,[name] : value})
        } else {
            setNewAddress({...newAddress,[name]:value})
            setNewContact({...newContact,address: newAddress})
        }
    }

    const getMaxId = (arr) => {
        let maxId = 0
        for (let i =0; i< arr.length; i++){
            if (arr[i].id > maxId) {
                maxId = arr[i].id
            }
        }
        return maxId
    }

    useEffect(() =>{
        const newId = getMaxId(contacts)+1
        setNewContact({...newContact,id: newId})
    },[])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setContacts([...contacts, newContact])
        console.log(newContact)
        navigate("/contacts")
    }
    
    return(
        <div className="new-contact-form">
            <h1>New Contact</h1>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <label>
                    Full name
                    <input required type="text" name="name" onChange={handleChange}></input>
                </label>
                <label>
                    City
                    <input required type="text" name="city" onChange={handleChange}></input>
                </label>
                <label>
                    Street
                    <input required type="text" name="street" onChange={handleChange}></input>
                </label>
                <label>
                    Zipcode
                    <input required type="text" name="zipcode" onChange={handleChange}></input>
                </label>
                <input className="submit-button" type="submit" value="Submit Changes"/>
            </form>
        </div>
    )
}

export default NewContactForm