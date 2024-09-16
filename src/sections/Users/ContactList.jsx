import { Link } from 'react-router-dom'

export default function ContactList(props) {
    const { contacts } = props

    if (!contacts) {
        return <div>Loading...ContactList</div>
    }

    return (
        <>
        <ul><h2>Contacts</h2></ul>
        {contacts.map((contact, index) => (
          <ul key={index}>
            <div className="contact-container">
              <p className="contact-name">
                {contact.firstName} {contact.lastName}
              </p>
              <Link to={`/contacts/edit/${contact.id}`} className="update-link">Update Profile 
              </Link>
              <Link to={`/contacts/view/${contact.id}`} className="view-link">View Profile 
              </Link>
            </div>
            <p>_______________________________________________</p>
          </ul>
        ))}
    </>
  )
}