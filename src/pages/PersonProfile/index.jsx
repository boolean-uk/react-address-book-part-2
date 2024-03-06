import { useEffect } from 'react'
import AddContact from './components/AddContact'
import ProfilePage from './components/ProfilePage'

import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  console.log("Inside PersonProfile: ", { props });

  const { id } = useParams()
  const { contact, setContact, contacts, setContacts} = props
  console.log('KSJDBFUIBS ',contacts)

  console.log('Contact in PersonProfile: ',contact)
  
  if (!contacts) return <p>Loading... PersonProfile</p>


  return (
    <article>

        <ProfilePage contacts={contacts} />
      
    </article>
  )
}

export default PersonProfile
