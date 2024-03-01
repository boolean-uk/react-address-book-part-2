import "./CreateContact.css"
import { useState } from 'react'

const defaultObject = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
}

const CreateContact = ({addToContacts}) => {
    const [dataObject, setDataObject] = useState(defaultObject)

    const handleChangeEvent = (e) => {
        setDataObject({...dataObject, [e.target.id]: e.target.value})
    }

    const submitAndReset = (e) => {
        e.preventDefault()
        addToContacts(dataObject)
        setDataObject({...defaultObject})
    }

    return (
        <div className="content-container">
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
                <input type="submit" value="Submit" onClick={(e) => submitAndReset(e)}/>
            </form>
        </div>
    )
}

export default CreateContact