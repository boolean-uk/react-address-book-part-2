import { useLocation, useNavigate } from "react-router-dom"
import { useState , useEffect } from "react";

export default function PersonView() {
    
    const [person, setPerson] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setPerson(location.state.contact)
            console.log(location.state.contact)
        }
        console.log(person)
    }, [location.state, person])

    if (!person) {
        return <div>Loading...</div>
    }
console.log(person);
    return (
        <div className="person-view">
            <h1>{person.firstName} {person.lastName} </h1>
            <p>{person.street} , {person.city}</p>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}