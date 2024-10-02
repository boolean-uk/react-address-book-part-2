import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../App"
import '../App.css'
import { useNavigate } from "react-router-dom"

function UpdateContact({ onAction }) {
    // Key to give each form a unique key value
    const [formKey, setFormKey] = useState(Date.now())
    const navigation = useNavigate()
    const [person, setPerson] = useState(null)
    const { id } = useParams()

    const { contacts } = useContext(AppContext)

    // Get the person from the link
    useEffect(() => {
        const contact = contacts.find(contact => contact.id === parseInt(id))

        if(contact) {
            setPerson(contact)
        }
    }, [id, contacts])

    if (!person) {
        return <div>Loading...</div>;
    }

    // Handle the submit event
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Yumikitsu/contact/${person.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(person)
            })

            if (response.ok) {
                onAction()
                setFormKey(Date.now())
                navigation(`/view/${person.id}`)
            } else {
                console.error("Failed to update Contact")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // Handle a freetext change event
    const handleTextChange = (event) => {
        if (event.target.name === 'latitude' || event.target.name === 'longitude') {
            setPerson({...person, [event.target.name]:parseFloat(event.target.value)})
        } else {
            setPerson({...person, [event.target.name]:event.target.value})
        }
    }

    return (
        <>
        <div className="FormWrapper">
            <h1>Create Contact</h1>
            <section className="FormSection">
                <form key={formKey} className="Form" onSubmit=  {handleSubmit}>
                    <label>First Name:
                        <input type="text" name="firstName" value={person.firstName} onChange={handleTextChange}/>
                    </label>
                    <label>Last Name:
                        <input type="text" name="lastName" value={person.lastName} onChange={handleTextChange}/>
                    </label>
                    <label>Street:
                        <input type="text" name="street" value={person.street} onChange={handleTextChange}/>
                    </label>
                    <label>City:
                        <input type="text" name="city" value={person.city} onChange={handleTextChange}/>
                    </label>
                    <label>Latitude:
                        <input type="text" name="latitude" value={person.latitude} onChange={handleTextChange}/>
                    </label>
                    <label>Longitude:
                        <input type="text" name="longitude" value={person.longitude} onChange={handleTextChange}/>
                    </label>
                    <div className="SubmitButton">
                        <input className="SubmitForm" type="submit" value={"Update"} />
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}

export default UpdateContact