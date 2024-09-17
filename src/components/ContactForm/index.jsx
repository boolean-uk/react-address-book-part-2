import { useState } from "react"

import "./styles.css"

function ContactForm({ submitData, initialFormState }) {
    const [userData, setUserData] = useState(initialFormState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData)
        submitData(userData)
        setUserData(initialFormState)
    }

    return (
            <form className="create-contact-form" onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input type="text" name="firstName" onChange={handleChange} value={userData.firstName} />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" onChange={handleChange} value={userData.lastName} />
                </label>
                <label>
                    Street
                    <input type="text" name="street" onChange={handleChange} value={userData.street} />
                </label>
                <label>
                    City
                    <input type="text" name="city" onChange={handleChange} value={userData.city} />
                </label>
                <label>
                    Gender
                    <div className="create-contact-radio">
                        <label>
                            male
                            <input type="radio" name="gender" onChange={handleChange} value="male" checked={userData.gender === "male"} />
                        </label>
                        <label>
                            female
                            <input type="radio" name="gender" onChange={handleChange} value="female" checked={userData.gender === "female"} />
                        </label>
                        <label>
                            other
                            <input type="radio" name="gender" onChange={handleChange} value="other" checked={userData.gender === "other"} />
                        </label>
                        <p>Specify Yourself: <input type="text" name="gender" onChange={handleChange} value={userData.gender}/></p>
                    </div>
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={handleChange} value={userData.email}/>
                </label>
                <label>
                    Job Title
                    <input type="text" name="jobTitle" onChange={handleChange} value={userData.jobTitle}/>
                </label>
                <label>
                    Favourite Colour
                    <input type="color" name="favouriteColour" onChange={handleChange} value={userData.favouriteColour}/>
                </label>
                {/* Wanna do this with some map picker or something later */}
                <label>
                    Latitude
                    <input type="text" name="latitude" onChange={handleChange} value={userData.latitude}/>
                </label>
                <label>
                    Longitude
                    <input type="text" name="longitude" onChange={handleChange} value={userData.longitude}/>
                </label>
                <label>
                    Profile Image Link
                    <input type="text" name="profileImage" onChange={handleChange} value={userData.profileImage}/>
                </label>
                <input type="submit"/>
            </form>
    )
}

export default ContactForm