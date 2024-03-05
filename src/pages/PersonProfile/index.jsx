import { useState, useEffect } from 'react'
import AddContact from './components/AddContact'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  console.log("Inside PersonProfile: ", { props });

  const [contact, setContact] = useState(null)
  const { id } = useParams()
  const { contacts } = props
  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((contact) => 
      (contact.id) === (id)))
    }
  }, [contacts, id])
  
  if (!contact) return <p>Loading... PersonProfile</p>


  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <AddContact contact={contact} contacts={contacts} setContact={setContact}/>
    </article>
  )
}

export default PersonProfile
