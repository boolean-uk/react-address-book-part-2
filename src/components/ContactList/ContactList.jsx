import ContactItem from "./contactItem/ContactItem"
import './style.css'

function ContactList(props) {
  
  let content
  if(props.contactList !== null) {
    content = props.contactList.map((item) => {
      return <ContactItem contact={item} baseURL={props.baseURL} key={item.id}/>
    })
  }

  
  

  return (
    <>
      <h2>Contact List</h2>
      <ul className="contact-list">
        {content}
      </ul>
    </>
  )
}

export default ContactList