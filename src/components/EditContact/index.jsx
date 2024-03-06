import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditContact({contacts, setContacts}){
    const [person, setPerson] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if (contacts && id) {
            const updateContact = contacts.find((contact) =>
                String(contact.id) === String(id)
            );
            setPerson(updateContact);
        }
    }, []); 

    if(!person) return <p>Can't find contact</p>

    function handleSubmit(event){
        event.preventDefault()
        //post request to api
         fetch(`https://boolean-api-server.fly.dev/ThomasKva/contact/${person.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person)
    })
    .then(response => response.json())
    .then(console.log(person))
    .then(updatePerson => {
        const updatedContacts = contacts.map(contact =>
            contact.id === updatePerson.id ? updatePerson : contact
        );
        console.log(updatedContacts)
        setContacts(updatedContacts);
        navigate(`/view/${updatePerson.id}`);
    })
    .catch(error => console.error("Could not update contact: ", error));
    }

    function handleOnChange(event){
        const {name, value} = event.target
        setPerson(prevPerson => ({...prevPerson, [name]: value}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Update Contact</h2>
            <label htmlFor="firstName">New First Name</label>
            <input type="text"
                id="firstName"
                name="firstName"
                onChange={handleOnChange}
            />

            <label htmlFor="lastName">New Last Name</label>
            <input type="text"
                id="lastName"
                name="lastName"
                onChange={handleOnChange}
            />

            <label htmlFor="street">New Street</label>
            <input type="text"
                id="street"
                name="street"
                onChange={handleOnChange}
            />

            <label htmlFor="city">New City</label>
            <input type="text"
                id="city"
                name="city"
                onChange={handleOnChange}
            />

            <button type="submit" className="submit-button">Update</button>
        </form>
    )
}

export default EditContact