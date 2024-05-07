import Concact from "./Contact";
import '/src/style/ContactsList.css'
export default function ContactsList( {contacts}) {
  console.log(contacts)
  return(
    <ul id="contacs-list">
      {
        contacts.map((contact) => {
          return (
            <Concact contact = {contact} key={contact.id}/>
          )
        })
      }
      
    </ul>
  )
}