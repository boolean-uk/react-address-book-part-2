import "./CreateContact.css"
import { useState } from 'react'

const defaultObject = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    profileImage: "",
    favouriteColour: "",
    gender: "",
}

const generateRandomNumber = (min, max) => {
    return Math.floor(min + Math.random()*(max - min + 1))
}


const CreateContact = ({addToContacts}) => {
    const [dataObject, setDataObject] = useState(defaultObject)

    const handleChangeEvent = (e) => {
        setDataObject({...dataObject, [e.target.id]: e.target.value})
    }

    const submitAndReset = (e) => {
        e.preventDefault()
        // This data could/should be extracted from the provided address, but that also requires paid API's... the free internet is dead.
        // So i just randomize it to display on the map.
        dataObject.latitude = generateRandomNumber(-90, 90)
        dataObject.longitude = generateRandomNumber(-90, 90)
        if (dataObject.profileImage === "" && dataObject.email !== "") {
            addToContacts({...dataObject, 
                profileImage: `https://www.gravatar.com/avatar/${dataObject.email}?s=120&d=identicon`
            })
        } else {
            addToContacts(dataObject)
        }
        setDataObject({...defaultObject})
    }

    return (
        <div className="content-container scroll-container">
            <div className="title">Create new contact</div>
            <form>
                <p>Basic information</p>
                <label>
                    First name: <br/>
                    <input 
                        id="firstName"
                        value={dataObject["firstName"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <label>
                    Last name: <br/>
                    <input 
                        id="lastName"
                        value={dataObject["lastName"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <p>Contact information</p>
                <label>
                    Email address: <br/>
                    <input 
                        id="email"
                        value={dataObject["email"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <p>Physical address</p>
                <label>
                    Street name: <br/>
                    <input 
                        id="street"
                        value={dataObject["street"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <label>
                    City: <br/>
                    <input 
                        id="city"
                        value={dataObject["city"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <p>Other information</p>
                <label>
                    Occupation: <br/>
                    <input 
                        id="jobTitle"
                        value={dataObject["jobTitle"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <label>
                    Profile picture link: <br/>
                    <input 
                        id="profileImage"
                        value={dataObject["profileImage"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <label>
                    Favourite color (supports hex-colors)<br/>
                    <input 
                        id="favouriteColour"
                        value={dataObject["favouriteColour"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <label>
                    Gender <br/>
                    <input 
                        id="gender"
                        value={dataObject["gender"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                <input type="submit" value="Submit" onClick={(e) => submitAndReset(e)}/>
            </form>
        </div>
    )
}

export default CreateContact