import { useEffect, useState } from "react"
import "../css/form.css"


function ContactForm({ setContacts, contacts }) {
    // const [idCounter, setIdCounter] = useState(11)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreetName] = useState("")
    const [city, setCityName] = useState("")




    function createContact(e) {
        e.preventDefault()
        const fullName = `${firstName} ${lastName}`
        setContacts([...contacts, {
            name: fullName,
            address: {
                street: street,
                city: city,

            }
        }])

        /*
        I wanted to use the id and change the id value and pass it along, but the value somehow doesn't get updated. I used index + 1 in the ContactList to fix it for now, but I'm going to try and fix this later so that I can use id instead of index.
        */
        // setIdCounter(prevIdCounter => prevIdCounter + 1);

        setFirstName("")
        setLastName("")
        setStreetName("")
        setCityName("")



    }



    // console.log("fullname", fullname)

    return (
        <div className='menu-screen-right'>

            <h1 className='header-sections-right'>
                Create Contact
            </h1>
            <form className="form-fields">
                <div className="field-section">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="field-section">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="field-section">
                    <label htmlFor="streetname">Street</label>
                    <input
                        type="text"
                        name="streetname"
                        id="streetname"
                        value={street}
                        onChange={(e) => setStreetName(e.target.value)}
                    />
                </div>


                <div className="field-section">
                    <label htmlFor="cityname">City</label>
                    <input
                        type="text"
                        name="cityname"
                        id="cityname"
                        value={city}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                </div>




                <button type="submit" onClick={createContact}>
                    Create
                </button>

            </form>
        </div >
    )
}
export default ContactForm