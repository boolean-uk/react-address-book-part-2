import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";
import axios from "axios";

const ContactProfile = (props) => {

    const {username, id} = useParams();

    const {contacts} = props ?? {};

    const [contact, setContact] = useState();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        latitude: 0,
        longitude: 0,

    });


    useEffect(() => {
        const contactFound = contacts.find((cont) => Number(id) === Number(cont.id));
        setContact(contactFound);
            
        setFormData({...formData,
            firstName: contactFound.firstName,
            lastName: contactFound.lastName,
            street: contactFound.street,
            city: contactFound.city,
            longitude: contactFound.longitude,
            latitude: contactFound.latitude,
        });
        
    }, []);

    
    if(!contacts || !contact) {
        return <p>Loading...</p>
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        handleUpdate();
        setFormData({
          firstName: '',
          lastName: '',
          street: '',
          city: '',
          longitude: 0,
          latitude: 0,
        });

        navigate(`/${username}`);
      };



    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://boolean-api-server.fly.dev/${username}/contact/${id}`)
            console.log(response.data)
        } catch (error) {
            console.error("Error: ", error)
        }

        
        navigate(`/${username}`);
    }

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`https://boolean-api-server.fly.dev/${username}/contact/${id}`, formData)
            console.log(response.data)
        } catch (error) {
            console.error("Error: ", error)
        }

        
        navigate(`/${username}`);

    }
    return (
        <>
        <div>
            <Menu />
        </div>

        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="street">Street: </label>
                    <input 
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <input 
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="longitude">Longitude: </label>
                    <input 
                    type="number"
                    step='0.0001'
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="latitude">Latitude: </label>
                    <input 
                    type="number"
                    step='0.0001'
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    />
                </div>
          
                <button type="submit" >Edit</button>
            </form>
            <button onClick={handleDelete}>Delete Contact</button>
            <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
        </>
    );
}

export default ContactProfile;