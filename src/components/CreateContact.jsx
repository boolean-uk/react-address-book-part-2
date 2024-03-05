import { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../style/createContact.css'

const CreateContact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        latitude: 0,
        longitude: 0,
        profileImage: "https://www.gravatar.com/avatar/Cordelia_Torphy@hotmail.com?s=120&d=identicon"
    });


    const {username} = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, type } = e.target;
        let {value} = e.target;

        if(type === "number") {
            value = parseFloat(value)
        }
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        setFormData({...formData, profileImage: `https://www.gravatar.com/avatar/${username}@hotmail.com?s=120&d=identicon`})
        try {
            const response = await axios.post(`https://boolean-api-server.fly.dev/${username}/contact`, formData)
            console.log(response.data)
        } catch (error) {
            console.error("Error: ", error )
        }

        setFormData({
          firstName: '',
          lastName: '',
          street: '',
          city: '',
          latitude: 0,
          longitude: 0,
          profileImage: "https://www.gravatar.com/avatar/Cordelia_Torphy@hotmail.com?s=120&d=identicon"

        });

        navigate(`/${username}`);
      };



    return (
        <>
        <div className="createContact-container">
        <div>
            <Menu />

        </div>
        <div className="createContact-form">
            <form onSubmit={handleSubmit}>
                <div className="createContact-form-item">
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </div>
                <div className="createContact-form-item">
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </div>

                <div className="createContact-form-item">
                    <label htmlFor="street">Street: </label>
                    <input 
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    />
                </div >
                <div className="createContact-form-item">
                    <label htmlFor="city">City: </label>
                    <input 
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    />
                </div>
                <div className="createContact-form-item">
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
                <div className="createContact-form-item">
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
                <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
        </>
    );
}

export default CreateContact;