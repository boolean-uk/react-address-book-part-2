import { useState, useEffect } from 'react'
import AddContact from './components/AddContact'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  console.log("Inside PersonProfile: ", { props });

  const { id } = useParams()
  const { contact, setContact, contacts, setContacts} = props

  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((acontact) => 
      (acontact.id) === (id)))
    }
  }, [contacts, id])
  
  if (!contact) return <p>Loading... PersonProfile</p>


  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <AddContact contact={contact} contacts={contacts} setContact={setContact} setContacts={setContacts}/>
    </article>
  )
}

export default PersonProfile
