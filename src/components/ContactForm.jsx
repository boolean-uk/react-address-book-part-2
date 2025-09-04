
import { useState, useContext } from 'react'
import { DisplayContext, DataContext } from '../App.jsx'
import { useNavigate } from 'react-router'

function ContactForm() {

    const { setDisplayForm } = useContext(DisplayContext)
    const { data } = useContext(DataContext)
    const navigate = useNavigate()

    const id = localStorage.getItem('id')
    const contactToUpdate = data.find((x) => x.id === Number(id))

    const init = contactToUpdate ? {
        firstName: contactToUpdate.firstName,
        lastName: contactToUpdate.lastName,
        street: contactToUpdate.street,
        city: contactToUpdate.street
    } : { 
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    }

    const [contact, setContact] = useState(init)
        

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (contactToUpdate) {
            try {
                const response = await fetch(localStorage.getItem('url') + `/${localStorage.getItem('id')}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                console.log('Success:', result)

                setDisplayForm(false)
                setContact({...contact, firstName:'', lastName:'', street:'', city:''})
                localStorage.removeItem('id')
                navigate(`/contact/${id}`)
                
            } catch (error) {
                console.error('Error:', error)
            }

        } else {
            try {
                const response = await fetch(localStorage.getItem('url'), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(contact)
                })
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                console.log('Success:', result)
    
                setDisplayForm(false)
                setContact({...contact, firstName:'', lastName:'', street:'', city:''})
    
            } catch (error) {
                console.error('Error:', error)
            }
        }
    }

    const handleChange = (e) => {
        const field = e.target.name
        const val = e.target.value
        
        if (field === 'firstName') {
            setContact({...contact, firstName: val})
        }
        if (field === 'lastName') {
            setContact({...contact, lastName: val})
        }
        if (field === 'street') {
            setContact({...contact, street: val})
        }
        if (field === 'city') {
            setContact({...contact, city: val})
        }
    }


    return (
        <>
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input 
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={contact.firstName}
            />
            <label htmlFor="lastName">Last name</label>
            <input 
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={contact.lastName}
            />
            <label htmlFor="street">Street</label>
            <input 
                type="text"
                id="street"
                name="street"
                onChange={handleChange}
                value={contact.street}
            />
            <label htmlFor="city">City</label>
            <input 
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                value={contact.city}
            />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default ContactForm