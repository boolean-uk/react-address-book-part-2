import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PersonProfile() {
    const { id } = useParams();
    const [person, setPerson] = useState([])

    const url = "https://boolean-api-server.fly.dev/Miadog7Extra/contact"

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        fetch(`${url}${id}`)
          .then((response) => response.json())
          .then((data) => setPerson(data));
          }, []);
    
    console.log(person)

    const navigate = useNavigate();
    
    if (!person) return <p>Loading...</p>

    function handleSubmit(event) {
        event.preventDefault()
        if (person !== undefined) {
            person.firstName = firstName
            person.lastName = lastName
            person.street = street
            person.city = city
        fetch(`${url}/${id}`,
        {method: 'PUT',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(person),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        }
        navigate(`/contact/${id}`)
    }

    function handleDelete() {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Delete successful');
                navigate('/contact');
            } else {
                console.error('Delete failed');
            }
        });
    }

    return(
        <article>
            <h2>
            {person.firstName} {person.lastName}
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setStreet(e.target.value)}
                    value={street}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
                <button type="submit">Edit</button>
                <button type="button" onClick={handleDelete}>Delete</button>
                </form>
        </article>
    )
}
export default PersonProfile