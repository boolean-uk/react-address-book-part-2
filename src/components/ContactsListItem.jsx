import { Link, useNavigate } from "react-router-dom"
import remove from '../../_assets/remove.svg'
import update from '../../_assets/update.svg'
import user from '../../_assets/user.svg'

export default function ContactsListItem(props) {
    const { contacts, loadContacts } = props

    const navigate = useNavigate()

    return (
        <>
            {contacts.map(contact => 
                <div key={contact.id}>
                    <img className="profile-image" src={`${contact.profileImage}`} alt={`${contact.firstName} ${contact.lastName}'s picture`} />
                    
                    <p>{contact.firstName} {contact.lastName}</p>

                    <Link to={`contact/${contact.id}`}><img className="svg-icon" src={user}></img></Link>

                    <button onClick={() => {
                        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact/${contact.id}`, { method: 'DELETE' }).then(loadContacts)
                    }}><img className="svg-icon" src={remove}></img></button>

                    <button onClick={() => navigate(`/contact/update/${contact.id}`)}><img className="svg-icon" src={update}></img></button>
                </div>
            )}

            {contacts.length === 0 && <p>No one was found..</p>}
        </>
    )
}