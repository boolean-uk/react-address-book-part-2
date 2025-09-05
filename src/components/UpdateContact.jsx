import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { ContactContext } from "../App"

function UpdateContact (){

    const { id } = useParams();
    const {contacts, contact_api} = useContext(ContactContext);
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        profileImage: '',
        gender: '',
        email: '',
        jobTitle: '',
        street: '',
        city: '',
        latitude: '',
        longitude: '',
        favouriteColour: ''
    });

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const clickedContact = contacts.find(c => String(c.id) === String(id));
            if (clickedContact) {
                setContact(clickedContact);
                setLoaded(true);
            }
        }
    }, [id, contacts, loaded]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(contact.firstName !== '' && contact.lastName !== ''){
            try {
                const response = await fetch(`${contact_api}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                });

                if (response.ok) {
                    navigate(`/profile/${id}`);
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <h1>Update Contact</h1>
            <nav>
                <Link to={`/profile/${id}`}>Back to contact profile</Link>
            </nav>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Firstname: </label>
                    <input
                        type="text"
                        name="firstname"
                        onChange={e => setContact({...contact, firstName: e.target.value})}value={contact.firstName}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Lastname: </label>
                    <input
                        type="text"
                        name="lastname" 
                        onChange={e => setContact({ ...contact, lastName: e.target.value })}
                        value={contact.lastName}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Profile image URL: </label>
                    <input
                        type="text"
                        name="profile-image"
                        onChange={e => setContact({ ...contact, profileImage: e.target.value })}
                        value={contact.profileImage}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Gender: </label>
                    <input
                        type="text"
                        name="gender"
                        onChange={e => setContact({ ...contact, gender: e.target.value })}
                        value={contact.gender}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        onChange={e => setContact({ ...contact, email: e.target.value })}
                        value={contact.email}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Job title: </label>
                    <input
                        type="text"
                        name="job-title"
                        onChange={e => setContact({ ...contact, jobTitle: e.target.value })}
                        value={contact.jobTitle}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Street: </label>
                    <input 
                        type="text"
                        name="street"
                        onChange={e => setContact({ ...contact, street: e.target.value })}
                        value={contact.street}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>City: </label>
                    <input
                        type="text"
                        name="city"
                        onChange={e => setContact({ ...contact, city: e.target.value })}
                        value={contact.city}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Latitude: </label>
                    <input
                        type="number"
                        name="latitude"
                        onChange={e => setContact({ ...contact, latitude: Number(e.target.value) })}
                        value={contact.latitude}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Longitude: </label>
                    <input
                        type="number"
                        name="longitude"
                        onChange={e => setContact({ ...contact, longitude: Number(e.target.value) })}
                        value={contact.longitude}>
                    </input>
                </div>
                <br></br>
                <div>
                    <label>Favorite colour: </label>
                    <input
                        type="text"
                        name="favorite-colour"
                        onChange={e => setContact({ ...contact, favouriteColour: e.target.value })}
                        value={contact.favouriteColour}>
                    </input>
                </div>
                <br></br>
                <div>
                    <button type="submit">Update contact</button>
                </div>
            </form>
        </>
    )
}

export default UpdateContact
