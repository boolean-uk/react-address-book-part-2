import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/uthmel/contact/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching contact');
        }
        return response.json();
      })
      .then(data => {
        console.log('Contact data:', data);  
        setContact(data);
      })
      .catch(error => console.error('Error fetching contact details:', error));
  }, [id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
}

export default ContactDetails;





