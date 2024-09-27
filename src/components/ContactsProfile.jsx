import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ContactProfile(props) {
    const [contact, setContact] = useState(null)
    const { id } = useParams();
  
    useEffect(() => {
      console.log("fetch person with id= ", id);

      props.props.forEach(contact => {
        console.log("Contact:", contact.firstName + contact.lastName, "ID:", id,
        id === contact.firstName + contact.lastName);
      });

      const matchingContact = 
      props.props.find((contact) => 
      (contact.firstName + contact.lastName) === (id));
      
      setContact(matchingContact);
    }, [id, contact])
  
    if (!contact) return <p>Loading...</p>
  
    return (
      <article>
        <h2>Name: {contact.firstName} {contact.lastName}</h2>
        <h3>Street: {contact.street}</h3>
        <h4>City: {contact.city}</h4>
      </article>
    )
  }
  
  export default ContactProfile;