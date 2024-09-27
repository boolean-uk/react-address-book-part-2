import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function ContactView(props) {
  const contactList = props.contactList
  const [contact, setContact] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  console.log(contactList)
  console.log(id)
  
  useEffect(() => {
    if (contactList && id) {

      const matchingContact = contactList.find((item) => 
        Number(item.id) === Number(id))
        console.log(matchingContact)
      setContact(matchingContact)
    }
  },[contactList, id])

  let content = <></>
  if(contact !== null) {
    content = 
    <>
      <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
      <p>{`Street: ${contact.street}`}</p>
      <p>{`City: ${contact.city}`}</p>
    </>
  }
  return (
    <>
    <button onClick={() => navigate('/')}></button>
    {content}
    </>
  )
}

export default ContactView