import { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateContact = (props) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",

    });


    const {username} = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
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
        });

        navigate("/");
      };



    return (
        <>
        <Menu />
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
                <button type="submit" >Submit</button>
            </form>

        </>
    );
}

export default CreateContact;