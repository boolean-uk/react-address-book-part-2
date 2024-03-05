import { useState } from "react";
import { Navigate } from "react-router-dom";

function ContactAdd(props) {
    
    const[person, setPerson] = useState({
       
        jobTitle: "",
        latitude: 0,
        longitude: 0,
        favouriteColour: "",
        profileImage: ""
    })

    const { contacts, setContacts } = props;

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
    
        if (inputName === "firstName") {
            person.firstName = inputValue
        }
        if (inputName === "lastName") {
            person.lastName = inputValue
        }
        if (inputName === "gender") {
            person.gender = inputValue
        }
        if (inputName === "email") {
            person.email = inputValue
        }
        if (inputName === "city") {
            person.city = inputValue
        }
        if (inputName === "street") {
            person.street = inputValue
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://boolean-api-server.fly.dev/StevenTPh/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(person),
        });
        const incrementId = contacts[contacts.length - 1].id + 1
        person.id = incrementId

        setContacts([...contacts, person])
        console.log(contacts)
        console.log("her er", person)
      };

    return(
        <main>
            <h2>Create contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Last name: </label>
                <input
                    type="text"
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="gender">Gender: </label>
                <input
                    type="text"
                    name="gender"
                    value={person.gender}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />

                <label htmlFor="city">City: </label>
                <input
                    type="text"
                    name="city"
                    value={person.city}
                    onChange={handleChange}
                />

                <label htmlFor="street">Street: </label>
                <input
                    type="text"
                    name="street"
                    value={person.street}
                    onChange={handleChange}
                />

                <button type="submit" onClick={() => Navigate(-1)}>Create</button>
            </form>
        </main>
    )
}

export default ContactAdd