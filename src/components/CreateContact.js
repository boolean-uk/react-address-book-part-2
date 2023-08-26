import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateContact(props) {
    // const { person } = props
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        street: '',
        city: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        // people.push({
        //     name: formData.name,
        //     street:formData.street,
        //     city:formData.city
        //   }) here i need to move fetching the json from contactlist to App so that I can pass props here and then push into the people list to add new contact
        
        navigate('/ContactList')
        console.log(formData)
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <label>First and Last Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
        />
        <label>Street:</label>
            <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
        />
        <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
        />
      <input className="form__submit" type="submit" value="Create Contact"/>
    </form>
  )
}

export default CreateContact