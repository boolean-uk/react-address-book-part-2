import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ContactDetails() {

  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    fetch(`https://boolean-uk-api-server.fly.dev/alinjo/contact/${id}`)
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact details:', error));

  }, [id]);

  const handleDelete = () => {

    fetch(`https://boolean-uk-api-server.fly.dev/alinjo/contact/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/'); 
      })
      .catch(error => console.error('Error deleting contact:', error));

  };

  if (!contact) return <div>Loading...</div>;

  return (

    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.firstName} {contact.lastName}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <button onClick={handleDelete}>Delete Contact</button>
      <button onClick={() => navigate(`/contact/${id}/edit`)}>Edit Contact</button>
    </div>

  );
}

export default ContactDetails;
