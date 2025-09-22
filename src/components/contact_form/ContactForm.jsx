import React, {useContext} from 'react';
import ContactDetail from "./ContactDetail.jsx";
import {ContactContext} from "../../App.jsx";
import {useNavigate} from "react-router-dom";

export const FormContext = React.createContext();

function ContactForm(props) {
    const {url, setContacts} = useContext(ContactContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    });
    
    const setValue = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };
    
    const getValue = (key) => {
        return formData[key];
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`${url}/contact`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            console.log(response);
            const created = await response.json();
            setContacts((prevContacts) => [...prevContacts, created]);
        } catch (e){
            console.error(e);
        }
        navigate("/");
    }

    return (
        <ul className="contact-details">
            <h1>Create Contact</h1>
            <FormContext.Provider value={{setValue, getValue}}>
                <form onSubmit={onSubmit}>
                    <ContactDetail key="firstName" id="firstName" display="First Name"/>
                    <ContactDetail key="lastName" id="lastName" display="Last Name"/>
                    <ContactDetail key="street" id="street" display="Street"/>
                    <ContactDetail key="city" id="city" display="City"/>
                    <input className="create-contact-submit" type="submit" value="Submit"/>
                </form>
            </FormContext.Provider>
        </ul>
    );
}

export default ContactForm;