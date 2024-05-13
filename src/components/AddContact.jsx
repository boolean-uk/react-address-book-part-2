import { useState } from "react"

export default function addContact() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [createContact, setCreateContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target

        setCreateContact({
            ...createContact,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://boolean-api-server.fly.dev/homonoviscoding/contact', {
            method: 'POST',
            body: JSON.stringify({
                createContact
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    return (

        <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' onChange={handleChange} value={createContact.firstName} placeholder='enter first name' name='firstName' />
                </div>
                
                <div>
                    <input type='text' onChange={handleChange} value={createContact.lastName} placeholder='enter last name' name='lastName'/>
                </div>

                <div>
                    <input type='text' onChange={handleChange} value={createContact.street} placeholder='enter block' name='street'/>
                </div>

                <div>
                    <input type='text' onChange={handleChange} value={createContact.city} placeholder='enter town' name='city'/>
                </div>

                <div>
                    <button type='submit'>Create</button>
                </div>
        </form>


    )
}