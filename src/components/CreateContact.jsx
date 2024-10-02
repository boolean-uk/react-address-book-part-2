import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ContactContext } from "../App"

const CreateContact = () => {
    const initialFormData = [
        {
            "firstName": "",
            "lastName": "",
            "street": "",
            "city": ""
          }
    ]

    const [formData, setFormData] = useState(initialFormData)

    const { addContact } = useContext(ContactContext)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        saveContact();
        navigate("/");
    }

    const saveContact = () => {
        const user = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city
        }
        axios.post(`https://boolean-uk-api-server.fly.dev/Ic4rus90/contact`,  user )
        .then(res => {
            addContact(res.data);
            navigate("/");
        })
        .catch(err => {
            console.error("Error creating contact: ", err);
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
            value={"Submit Survey"} 
        />
      </form>
    )
}

export default CreateContact