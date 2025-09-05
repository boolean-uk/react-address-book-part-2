import { useContext, useEffect } from 'react';
import { ContactContext } from '../App.jsx';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ContactProfile.css'

function ContactProfile() {
  const { contact, setContact, fetchContact, setFetchContact} = useContext(ContactContext);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/598115/contact/${id}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    };

    fetchContact();
  }, [id, setContact]);

    const handleEdit  = async () => {
        nav('/editcontact/' + contact.id);
    }

    const handleDelete  = async () => {
        try {
            await fetch(
                `https://boolean-uk-api-server.fly.dev/598115/contact/${id}`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            nav('/contacts/');
            const refetch = !fetchContact;
            setFetchContact(refetch);
            alert('Contact deleted');

        } catch (error) {
            console.error("Failed to delete contact:", error);
        }
    }

  return (
    <>
  <div className="profile-container">
    <button className="back-button" onClick={() => nav('/contacts/')}>Back</button>
    <h1>Profile</h1>

    <div>
      <p>{contact.firstName} {contact.lastName}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>

    <div className="profile-buttons">
      <button className="edit-button" onClick={handleEdit}>Edit</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  </div>
</>
  );
}

export default ContactProfile;
