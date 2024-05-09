import { useParams } from "react-router-dom"

export default function ContactDetails({ contacts }){
  const urlParam = useParams()
  
  const contact = contacts.find(c => c.id === Number(urlParam.id))
  return (
    <section>
      <h4>{contact.firstName} {contact.lastName}</h4>
      <p>{contact.street}, {contact.city}</p>
    </section>
  )
}