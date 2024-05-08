import { Link, useNavigate } from "react-router-dom"

export default function ContactsListItem(props) {
    const { contacts, loadContacts } = props

    const navigate = useNavigate()

    return (
        <>
            {contacts.map(contact => 
                <div key={contact.id}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    
                    <Link to={`contact/${contact.id}`}>View</Link>

                    <button onClick={() => {
                        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact/${contact.id}`, { method: 'DELETE' }).then(loadContacts)
                    }}>Remove</button>

                    <button onClick={() => navigate(`/contact/update/${contact.id}`)}>Update</button>
                </div>
            )}
        </>
    )
}