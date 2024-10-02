import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { ContactContext } from "../App"

const EditContact = () => {
    const initialFormData = {
            "firstName": "",
            "lastName": "",
            "street": "",
            "city": ""
          }
    

    const [formData, setFormData] = useState(initialFormData)

    // Get the id from the path
    const { id } = useParams();

    // For navigating back to contact view after edit.
    const navigate = useNavigate();

    // Get contacts from context
    const { contacts, updateContact } = useContext(ContactContext);

    useEffect(() => {
        if (id) {
            const matchingContact = contacts.find((contact) => Number(contact.id) === Number(id));
            
            if (matchingContact !== undefined) {
                setFormData(matchingContact)
            }
        }
    }, [id, contacts])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateContactData();
    }

    const updateContactData = () => {
        axios.put(`https://boolean-uk-api-server.fly.dev/Ic4rus90/contact/${id}`,  formData )
        .then(res => {
            console.log("Contact updated: ", res.data)
            updateContact(res.data);
            navigate(`/contact/${id}`);
        })
        .catch(err => {
            console.error("Error updating contact: ", err);
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "firstName") {
            setFormData({...formData, firstName: value})
        }

        else if (name === "lastName") {
            setFormData({...formData, lastName: value})
        }

        else if (name === "street") {
            setFormData({...formData, street: value})
        }

        else if (name === "city") {
            setFormData({...formData, city: value})
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <label>
            First name:
            <input
            type="text"
            name="firstName"
            value= {formData.firstName} 
            onChange={handleChange}
            />
        </label>

        <label>
            Last name: 
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
        </label>

        <label>
            Street: 
            <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            />
        </label>

        <label>
            City: 
            <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            />
        </label>

        <input 
            className="form__submit" 
            type="submit" 
            value={"Update contact"} 
        />
      </form>
    )
}

export default EditContact