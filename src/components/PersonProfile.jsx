import { useContext, useEffect, useState } from "react"
import { ContactContext } from "../App"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function PersonProfile(){
    const { contacts, updateContacts } = useContext(ContactContext)
    const [ contact, setContact ] = useState(null)
    const contactId = useParams()
    const [newProfile, setNewProfile] = useState(null)
    const [showEditForm, setEditForm] = useState(false)

    useEffect(() => {
        const contactProfile = contacts.find((c) => c.id.toString() === contactId.id)
        setContact(contactProfile)
    }, [contactId.id, contacts])

    if (!contact) return <p>Loading...</p>

    const profileValues = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city,
        gender: contact.gender,
        email: contact.email,
        jobTitle: contact.jobTitle,
        latitude: contact.latitude,
        longitude: contact.longitude,
        favouriteColour: contact.favouriteColour,
        profileImage: contact.profileImage
    }

    const changeContact = (event) => {
        setNewProfile({...newProfile, [event.target.id]: event.target.value})
    }

    const deleteContact = () => {
        fetch(`https://boolean-uk-api-server.fly.dev/PandersPanda/contact/` + contactId.id, {
            method: "DELETE"
        })
            .then(respone => respone.json())
            .then(() => {
                updateContacts()
            })
    }

    const putContact = () => {

        fetch(`https://boolean-uk-api-server.fly.dev/PandersPanda/contact/` + contactId.id, {
            method: "PUT",
            body: JSON.stringify(newProfile),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
            .then(response => response.json())
            .then(() => {
                updateContacts()
            })
        
        setEditForm(false)
    }

    return(
        <article>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <h3>{contact.city} {contact.street}</h3>
            <Link to="/dashboard">
                <button onClick={deleteContact}>Delete</button>
            </Link>
            <button onClick={() => {
                setEditForm(true)
                setNewProfile(profileValues)
                }}>Edit</button>

            { showEditForm && 
                <div className="edit-form">
                    <h2>Edit contact</h2>
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
                        <button onClick={putContact}>Edit</button>       
                    </div>
            }
        </article>
    )
}

export default PersonProfile