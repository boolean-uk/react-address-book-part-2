
import ContactListItem from "./ContactListItem"
export default function ContactList ({contacts}) {



  return(<>
    <ul>
      

    {contacts.map((contact,index)=>(
        <ContactListItem key={index} contact={contact}/>
    ))}

    </ul>
  </>
  )


}
