import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContactContext } from "../App"

function Dashboard () {

    const { contacts } = useContext(ContactContext);

    return (
        <>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/create-contact">Create a contact</Link>
            </nav>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <Link to={`/profile/${contact.id}`}>
                            <h3>
                                {contact.firstName} {contact.lastName}
                            </h3>
                        </Link>
                    </li>
                        
                ))}
            </ul>
        </>
    )
}

export default Dashboard
