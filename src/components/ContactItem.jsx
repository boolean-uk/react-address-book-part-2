import { Link } from "react-router-dom"

function ContactItem(props) {

    const {contact} = props

    return (
        <div>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p><Link to={`/contact/${contact.id}`} >See Profile</Link></p>
            <hr />
        </div>
    )
}

export { ContactItem }