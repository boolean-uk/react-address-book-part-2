import { useState } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"

function AddContact({ onAction }) {
    // Key to give each form a unique key value
    const [formKey, setFormKey] = useState(Date.now())
    const navigation = useNavigate()

    const initialData = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        jobTitle: '',
        street: '',
        city: '',
        latitude: 0,
        longitude: 0,
        favouriteColour: '',
        profileImage: ''
    }

    const [contactData, setContactData] = useState(initialData)

    // Handle the submit event
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            })

            if (response.ok) {
                onAction()
                setContactData(initialData)
                setFormKey(Date.now())
                navigation('/')
            } else {
                console.error("Failed to add Contact")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // Handle a freetext change event
    const handleTextChange = (event) => {
        if (event.target.name === 'latitude' || event.target.name === 'longitude') {
            console.log("Test")
            setContactData({...contactData, [event.target.name]:parseFloat(event.target.value)})
        } else {
            console.log("Nice")
            setContactData({...contactData, [event.target.name]:event.target.value})
        }
    }

    return (
        <>
        <div className="FormWrapper">
            <h1>Create Contact</h1>
            <section className="FormSection">
                <form key={formKey} className="Form" onSubmit=  {handleSubmit}>
                    <label>First Name:
                        <input type="text" name="firstName" value={contactData.firstName} onChange={handleTextChange}/>
                    </label>
                    <label>Last Name:
                        <input type="text" name="lastName" value={contactData.lastName} onChange={handleTextChange}/>
                    </label>
                    <label>Street:
                        <input type="text" name="street" value={contactData.street} onChange={handleTextChange}/>
                    </label>
                    <label>City:
                        <input type="text" name="city" value={contactData.city} onChange={handleTextChange}/>
                    </label>
                    <label>Latitude:
                        <input type="text" name="latitude" value={contactData.latitude} onChange={handleTextChange}/>
                    </label>
                    <label>Longitude:
                        <input type="text" name="longitude" value={contactData.longitude} onChange={handleTextChange}/>
                    </label>
                    <div className="SubmitButton">
                        <input className="SubmitForm" type="submit" value={"Create"} />
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}

export default AddContact