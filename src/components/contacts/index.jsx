import { Link } from "react-router-dom"

function Contact({ data }) {


    return (
        <div>
            <ul>
                {data.map((person) => 
                <li key={person.id}>
                    <h2>{person.firstName} {person.lastName}</h2>
                    <p><Link to={`/contact-list/contact-details/${person.id}`}>View</Link></p>
                </li> 
                )}
            </ul>
        </div>
    )
}

export default Contact