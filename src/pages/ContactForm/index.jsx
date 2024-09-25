import { useState } from 'react';
import Question from './components/Question.jsx'

function ContactForm(props) {
    const { postContact, navigateToDashboard } = props

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const contact = {
            firstName: firstName,
            lastName: lastName,
            street: street,
            city: city,
        }
        postContact(contact)
        navigateToDashboard();
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <Question question = "First Name" value = {firstName} setValue = {setFirstName}/>
            <Question question = "Last Name" value = {lastName} setValue = {setLastName}/>
            <Question question = "Street" value = {street} setValue = {setStreet}/>
            <Question question = "City" value = {city} setValue = {setCity}/>
            <button type="submit" className="button-container">Create Contact</button>
        </form>
    )
}

export default ContactForm
