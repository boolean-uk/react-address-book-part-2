import { useParams } from 'react-router-dom';


function ContactProfile({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find(contact => String(contact.id) === id)
  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <h3>
        {contact.street}, {contact.city}
      </h3>
      
    </article>
  )
}

export default ContactProfile