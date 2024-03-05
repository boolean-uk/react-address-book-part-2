import "./CreateContact.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import emptyFormObject from "../../Utils/templates.js"
import { baseUrl } from '../../Utils/apiUtils.js';
import FormInputField from "./FormInputField/FormInputField.jsx";
import { generateRandomNumber } from "../../Utils/numUtils.js";
import { formContext } from "./Context.js";

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
        <formContext.Provider
            value={{dataObject: dataObject, handleChange: handleChangeEvent}}
        >
        <div className="content-container scroll-container">
            <div className="title">Create new contact</div>
            <form>
                <p>Basic information</p>
                <div className="double-line-container">
                    <FormInputField 
                        labelText="First Name"
                        fieldId="firstName"
                    />
                    <FormInputField 
                        labelText="Last name"
                        fieldId="lastName"
                    />
                </div>
                <div className="single-line-container">
                <FormInputField 
                    labelText="Email address"
                    fieldId="email"
                    />

                </div>
                <div className="double-line-container padding-line">
                    <FormInputField 
                        labelText="Street name"
                        fieldId="street"
                    />
                    <FormInputField 
                        labelText="City"
                        fieldId="city"
                    />
                </div>
                <div className="double-line-container width-line">
                    <FormInputField 
                        labelText="Occupation"
                        fieldId="jobTitle"
                    />
                    <FormInputField 
                        labelText="Gender"
                        fieldId="gender"
                    />
                </div> 
                <div className="small-single-line-container colour-preview">
                    <FormInputField 
                        labelText="Favourite color"
                        fieldId="favouriteColour"
                    />
                    {dataObject["favouriteColour"] && <div style={{backgroundColor: `${dataObject["favouriteColour"]}`}}/>}
                </div>
                <div className="small-single-line-container image-preview">
                    <FormInputField 
                        labelText="Profile picture link"
                        fieldId="profileImage"
                    /><br/>
                    {dataObject["profileImage"] && 
                        <img
                            title="Profile picture image preview"
                            alt="image preview" 
                            src={dataObject["profileImage"]}
                        />
                    }
                    {(!dataObject["profileImage"] && dataObject["email"]) && 
                        <img 
                            title="Profile picture image preview"
                            alt="image preview"
                            src={`https://www.gravatar.com/avatar/${dataObject.email}?s=120&d=identicon`} 
                        />
                    }
                </div>
                <input type="submit" id="submitButton" value="Submit" onClick={(e) => submitAndReset(e)}/>
            </form>
        </div>
        </formContext.Provider>
    )
}

export default CreateContact