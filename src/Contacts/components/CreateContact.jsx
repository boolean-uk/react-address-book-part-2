import {  useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateContact() {
    const initialState = {
        firstName: '',
        lastName:'',
        street: '',
        city:'',
    };
    const navigate = useNavigate();

    const [person, setPerson] = useState(initialState);

    function handleContactCreation(event) {
        event.preventDefault();
        fetch("https://boolean-uk-api-server.fly.dev/Magnus-droid/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person)
        })
        navigate('/contacts')
        

    }

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName == "firstName") {
            setPerson({...person, firstName: inputValue})
        }
        if (inputName == "lastName") {
            setPerson({...person, lastName: inputValue})
        }
        if (inputName == "street") {
            setPerson({...person, street: inputValue})
        }
        if (inputName == "city") {
            setPerson({...person, city: inputValue})
        }
    }

    return(
        <form onSubmit={handleContactCreation}>
            <h2>Create Contact</h2>
            <label>First name<textarea
                name="firstName"
                onChange={handleChange}
            ></textarea></label>
            
            <label>Last name<textarea
                name="lastName"
        
                onChange={handleChange}
            ></textarea></label>
                        
            <label>Street<textarea
                name="street"
                
                onChange={handleChange}
            ></textarea></label>
                        
            <label>City<textarea
                name="city"
                onChange={handleChange}
            ></textarea></label>
            <button type="submit" className="create-btn">Create</button>
        </form>
    );
}