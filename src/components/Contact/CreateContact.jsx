import { useState,  useContext } from "react";
import {useNavigate} from "react-router-dom"
import { ContactContext } from "../../App";

function CreateContact() {
    
    const {setContacts} =useContext(ContactContext)
    const navigate = useNavigate()

   const url = 'https://boolean-uk-api-server.fly.dev/KristofferBlucher/contact'


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city:'',
       // latitude: '',
        // longitude:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        


       const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            const newContact = await response.json()
            setContacts(prevContacts => [...prevContacts, newContact])
            console.log("SHOW DATA", newContact)
            navigate('/')
            }


    


return (

    <form onSubmit={handleSubmit}>
        <h2> Create New Contact</h2>
        <div>
        <label> First Name: </label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
        <label> Last Name: </label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
        <label> Street: </label>
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div>
        <label> City: </label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        {/* <div> */}
        {/* <label> Latitude: </label>
        <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} />
        </div>
        <div>
        <label> Longitude: </label>
        <input type="number" name="longitude" value={formData.longitude} onChange={handleChange} />
        </div> */}
        <button type="submit"> Add Contact  </button>
    </form>
    

)

}

export default CreateContact

    

