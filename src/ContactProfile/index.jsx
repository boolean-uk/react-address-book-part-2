import { useParams } from "react-router-dom"

export default function ContactProfile ({contacts}) {
  
  console.log(contacts)

  const id = useParams()
  console.log(id)
  const contact = contacts.find((item) =>  item.id === Number(id.id))

  console.log(contact)
  return(<>

    <h2>{contact.firstName} {contact.lastName}</h2>
    <p>{contact.city}</p>
    <p>{contact.street}</p>



  </>)
}
