import './NewContactForm.css'
import './NewContactForm'
import { useContext, useEffect, useState } from 'react'
import { ContactContext } from '../../App'
import { useParams } from 'react-router-dom'

export default function NewContactForm() {

                                                
    const {setContact, contact, handleSubmit} = useContext(ContactContext)
    const {id} = useParams()

    useEffect(()=>{
        console.log(id)
    },[])

    const submit = (event) => {
        event.preventDefault()
        handleSubmit()
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setContact({...contact, [name]:value})
    }

    return (
        <div onSubmit={submit} className='content'>

            <form className="contact-form">

                <label htmlFor='firstName'>First Name</label>
                <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} />

                <label htmlFor='lastName'>Last Name</label>
                <input type="text" name="lastName" value={contact.lastName} onChange={handleChange}/>

                <label htmlFor='street'>Street</label>
                <input type="text" name='street' value={contact.street} onChange={handleChange}/>

                <label htmlFor='city'>City</label>
                <input type="text"  name='city' value={contact.city} onChange={handleChange}/>

                <button type='submit'>Create</button>
            </form>
        </div>
    );
}