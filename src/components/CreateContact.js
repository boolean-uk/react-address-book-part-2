import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateContact(props) {
    const { people } = props
    let idcounter
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
        idcounter=people.length + 1

        people.push({
          id: idcounter,
          name: formData.name,
          street:formData.street,
          city:formData.city
        }) 
        
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