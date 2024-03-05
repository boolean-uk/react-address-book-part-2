import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateContact(props){
    const {state} = useLocation()
    const navigate = useNavigate()
    const {id} = state
    const { contacts } = props
    const [contact, setContact] = useState(null)
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        gender: "",
        email: "",
        jobTitle: "",
        latitude: 0,
        longitude: 0,
        favouriteColour: "",
        profileImage: ""
    })

    useEffect(() =>{
        const contact = contacts.find(c => c.id === id);
        if (!contact) return <div>Loading...</div>
        setContact(contact)
        setData({
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
        })
    }, [contacts, id])    

    const handleChange = (event) =>{
        const {value, name} = event.target
        setData(prevData => ({
            ...prevData,
            [name]: name !== "latitude" && name !== "longitude" ? value : Number(value)
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()                
        fetch(`https://boolean-api-server.fly.dev/louisshr/contact/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok){
                navigate(-1)
            }
            else{
                console.log("Fetch call failed")
            }
        })
    }

    return(
        <div>

<main>
            <h1>Update Contact</h1>
            <form onSubmit={handleSubmit}>
                <h3>First Name:</h3>
                <input
                type="text"
                value={data.firstName}
                name="firstName"
                onChange={handleChange}
                />

                <h3>Last Name:</h3>
                <input
                type="text"                
                value={data.lastName}
                name="lastName"
                onChange={handleChange}
                />

                <h3>Street:</h3>
                <input
                type="text"
                value={data.street}
                name="street"
                onChange={handleChange}
                />

                <h3>City:</h3>
                <input
                type="text"
                value={data.city}
                name="city"
                onChange={handleChange}
                />

                <h3>gender:</h3>
                <input
                type="text"
                value={data.gender}
                name="gender"
                onChange={handleChange}
                />

                <h3>email:</h3>
                <input
                type="text"
                value={data.email}
                name="email"
                onChange={handleChange}
                />

                <h3>Job Title:</h3>
                <input
                type="text"
                value={data.jobTitle}
                name="jobTitle"
                onChange={handleChange}
                />

                <h3>Latitude:</h3>
                <input
                type="number"
                value={data.latitude}
                name="latitude"
                onChange={handleChange}
                />

                <h3>Longitude:</h3>
                <input
                type="number"
                value={data.longitude}
                name="longitude"
                onChange={handleChange}
                />

                <h3>Favourite Colour</h3>
                <input
                type="text"
                value={data.favouriteColour}
                name="favouriteColour"
                onChange={handleChange}
                />

                <h3>Profile Image</h3>
                <input
                type="text"
                value={data.profileImage}
                name="profileImage"
                onChange={handleChange}
                />
                <br></br>
            <input type="submit" value="Update Contact" />    
            </form>            
        </main>
        </div>
    )
}