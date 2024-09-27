import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactChange(props) {

    const {id} = useParams();

    const[person, setPerson] = useState()
    const navigate = useNavigate();

    const { contacts, setContacts } = props;

    const thePerson = contacts.find((person) => Number(person.id) === Number(id))
    
   
    useEffect(() => {
        setPerson(thePerson);
        console.log("hehehe",person)
    }, [person]);
   

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
    
        setPerson(prevPerson => ({
            ...prevPerson,
            [inputName]: inputValue
        }));
    }

    const handleSubmit = (event) => {
        
      };

    return(
        <main>
            <h2>Change contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    value=""
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="lastName">Last name: </label>
                <input
                    type="text"
                    name="lastName"
                    value=""
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="gender">Gender: </label>
                <input
                    type="text"
                    name="gender"
                    value=""
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    value=""
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="city">City: </label>
                <input
                    type="text"
                    name="city"
                    value=""
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="street">Street: </label>
                <input
                    type="text"
                    name="street"
                    // value={person.street}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Create</button>
            </form>
        </main>
    )
}

export default ContactChange