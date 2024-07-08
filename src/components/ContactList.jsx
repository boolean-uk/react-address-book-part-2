import ContactListItem from './ContactListItem'
import { useEffect } from 'react';

export default function ContactList({allContacts, setAllContacts}) {
  
   useEffect(() => {
     fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact")
       .then((res) => res.json())
       .then((data) => setAllContacts(data));
   }, []);

   console.log("allContacts", allContacts);
  return (
    <section className="contact-list-section"> 
      <h2>Contacts</h2>
      <ul className='contacts-ul'>
        {allContacts.map((contact, index) => (
          <ContactListItem key={index} contact={contact} />
        ))}
      </ul>
    </section>
  );
}
