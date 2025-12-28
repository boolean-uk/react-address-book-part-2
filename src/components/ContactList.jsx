import ContactItem from "./ContactItem"
import { Link } from "react-router-dom"

function ContactList(props) {
    const {people} = props;
  return (
    <>
    <h2> Contacts </h2>
    <ul>
        {people.map((person, index) => (
        <li key={index}>
        <ContactItem firstname={person.firstName} lastname={person.lastName}/>
        <Link to={`/${person.id}`}>View</Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default ContactList