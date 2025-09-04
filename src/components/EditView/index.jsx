/* eslint-disable react/prop-types */
import { Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App.jsx"
import { useContext, useState } from "react";

function EditView() {
    const { contacts } = useContext(AppContext)
    const { id } = useParams();
    const contact = contacts.find(c => c.id == id)

    const editContact = {
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

    const [firstName, setFirstName] = useState(editContact.firstName)
    const [lastName, setLastName] = useState(editContact.lastName)
    const [street, setStreet] = useState(editContact.street)
    const [city, setCity] = useState(editContact.city)
    const [gender, setGender] = useState(editContact.gender)
    const [email, setEmail] = useState(editContact.email)
    const [jobTitle, setJobTitle] = useState(editContact.jobTitle)
    const [latitude, setLatitude] = useState(editContact.latitude)
    const [longitude, setLongitude] = useState(editContact.longitude)
    const [favoriteColor, setFavouriteColour] = useState(editContact.favoriteColor)
    const [profileImage, setProfileImage] = useState(editContact.profileImage)

    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault()


        editContact.firstName = firstName;
        editContact.lastName = lastName;
        editContact.street = street;
        editContact.city = city;
        editContact.gender = gender;
        editContact.email = email;
        editContact.jobTitle = jobTitle;
        editContact.latitude = parseFloat(latitude);
        editContact.longitude = parseFloat(longitude);
        editContact.favoriteColor = favoriteColor;
        editContact.profileImage = profileImage;

        console.log(editContact)

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editContact)
        };

        fetch(`https://boolean-uk-api-server.fly.dev/fanden/contact/${id}`, requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
        navigate(`/view/${id}`)
    }


    // This could be cleaned up, but at this point I won't prioritize it
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label><br></br>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                /><br></br>
                <label htmlFor="lastName">Last name</label><br></br>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                /><br></br>
                <label htmlFor="street">Street</label><br></br>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setStreet(e.target.value)}
                    value={street}
                /><br></br>
                <label htmlFor="city">City</label><br></br>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setCity(e.target.value)}
                     value={city}
                /> <br></br>
                <label htmlFor="gender">Gender</label><br></br>
                <input
                    type="text"
                    id="gender"
                    name="gender"
                    onChange={e => setGender(e.target.value)}
                    value={gender}
                /><br></br>

                <label htmlFor="email">Email</label><br></br>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                /><br></br>
                <label htmlFor="jobTitle">Job Title</label><br></br>
                <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    onChange={e => setJobTitle(e.target.value)}
                    value={jobTitle}
                /><br></br>
                <label htmlFor="latitude">Latitude</label><br></br>
                <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    onChange={e => setLatitude(e.target.value)}
                    value={latitude}
                /><br></br>
                <label htmlFor="longitude">Longitude</label><br></br>
                <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    onChange={e => setLongitude(e.target.value)}
                    value={longitude}
                /><br></br>
                <label htmlFor="favouriteColour">Favorite Color</label><br></br>
                <input
                    type="text"
                    id="favouriteColour"
                    name="favouriteColour"
                    onChange={e => setFavouriteColour(e.target.value)}
                    value={favoriteColor}
                /><br></br>
                <label htmlFor="profileImage">Profile Image</label><br></br>
                <input
                    type="text"
                    id="profileImage"
                    name="profileImage"
                    onChange={e => setProfileImage(e.target.value)}
                    value={profileImage}
                /><br></br>


                <button type="submit">Submit</button>
            </form>
            <Link to="/">Back</Link>
        </>
    )
}

export default EditView
