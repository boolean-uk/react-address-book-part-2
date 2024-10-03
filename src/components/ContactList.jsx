import { Link } from "react-router-dom"

function ContactList(props){
    const {people} = props 
    return(
        <>
        <div className="contact-List">
            <ul>
                {people.map((person) => (
                    <li key={person.id} ><Link to={"/contact/"+person.id}>{person.firstName} {person.lastName}</Link></li>
                ))}
            </ul>
        </div>
            
        </>
    )
}

export default ContactList