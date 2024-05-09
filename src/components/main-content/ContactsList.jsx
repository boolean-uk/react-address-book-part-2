import Concact from "./Contact";
export default function ContactsList( {contacts}) {
  return(
    <ul id="contacs-list">
      <h2>Contacts</h2>
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