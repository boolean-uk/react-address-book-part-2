import "./CreateContact.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import emptyFormObject from "../../Utils/templates.js"
import { baseUrl } from '../../Utils/apiUtils.js';

const generateRandomNumber = (min, max) => {
    return Math.floor(min + Math.random()*(max - min + 1))
}

const CreateContact = ({addToContacts, template=emptyFormObject}) => {
    const [dataObject, setDataObject] = useState(template)
    const { id } = useParams()

    const retrieveContactDetails = async (id) => {
        await fetch(baseUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setDataObject({...res}))
    }

    useEffect(() => {
        if (id) {
            retrieveContactDetails(id)
        }
    }, [id])

    const handleChangeEvent = (e) => {
        setDataObject({...dataObject, [e.target.id]: e.target.value})
    }

    const submitAndReset = (e) => {
        e.preventDefault()
        // This data could/should be extracted from the provided address, but that also requires paid API's... the free internet is dead.
        // So i just randomize it to display on the map.
        // Limiting latitude between -60 and 70 so its less likely to just put people in water/ice
        dataObject.latitude = dataObject.latitude || generateRandomNumber(-60, 70)
        dataObject.longitude = dataObject.longitude || generateRandomNumber(-90, 90)
        if (dataObject.profileImage === "" && dataObject.email !== "") {
            addToContacts({...dataObject, 
                profileImage: `https://www.gravatar.com/avatar/${dataObject.email}?s=120&d=identicon`
            }, id)
        } else {
            addToContacts(dataObject, id)
        }
        setDataObject({...emptyFormObject})
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