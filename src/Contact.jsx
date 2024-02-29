import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

function Contact({contacts}){

    const {id} = useParams()
    const contact = contacts.find((x) => `${x.id}` === `${id}`)
    if (!contact) return (
        <h1>Contact doesn't exist</h1>
    )
    return (
        <div>
            <h1 className="ContactName">{contact.firstName} {contact.lastName}</h1>
            <h1 className="ContactInfo">Street: {contact.street}</h1>
            <h1 className="ContactInfo">City: {contact.city}</h1>

        </div>
    )
}

Contact.propTypes = {
    contacts: PropTypes.array
}

export default Contact