
function Contact(contact) {
  contact=contact.contact

  

  if (!contact) return <p>Loading...</p>
  return (
    <div>
      
      <h3>
          {contact.firstName} {contact.lastName}
      </h3>
      <h3>
          {contact.city} {contact.street}
      </h3>
    </div>
  )
}
  
export default Contact