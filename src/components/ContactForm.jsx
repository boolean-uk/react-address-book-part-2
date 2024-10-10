import { useContext, useState } from "react"
import { ContactContext } from "../App"
import { Link } from "react-router-dom"

function ContactForm(){
    const { updateContacts } = useContext(ContactContext)

    const initialContact = {
        firstName: "Rick",
        lastName: "Sanchez",
        street: "Morty Lane",
        city: "Jerryville",
        gender: "Male",
        email: "rick@sanchez.com",
        jobTitle: "Scientist",
        latitude: 42,
        longitude: 629,
        favouriteColour: "#0d7f26",
        profileImage: ""
    }

    const [newContact, setContact] = useState(initialContact)

    const changeContact = (event) => {
        setContact({...newContact, [event.target.id]: event.target.value})
    }

    const handleSubmit = () => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newContact)
            };
            fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/contact", requestOptions)
                .then(response => response.json())
                .then(data => updateContacts(data))
        }
        catch(e){
            console.error(e)    
        }
    }

    return(
        <>
          <h2>Add a contact</h2>
          <p>First name:</p>
          <input
            type="text"
            id="firstName"
            onChange={changeContact}
            />
           <p>Last Name:</p> 
           <input
            type="text"
            id="lastName"
            onChange={changeContact}
            />
            <p>City:</p>
            <input
            type="text"
            id="city"
            onChange={changeContact}
            />
            <p>Street:</p>
            <input
            type="text"
            id="street"
            onChange={changeContact}
            />
            <br></br>
            <Link to="/dashboard">
                <button onClick={handleSubmit}>Add</button>
            </Link>
        </>
    )
}

export default ContactForm