import { Link, useParams, useNavigate } from 'react-router-dom';
import { ContactContext } from '../App';
import { useContext } from 'react';


function ContactView() {
  const { contacts, url, setContacts } = useContext(ContactContext)
  const { id } = useParams();
  //console.log(id)
  const correctContact = contacts.find(c => c.id.toString() === id.toString())
  console.log("contact, ",correctContact)
  const navigate = useNavigate()
  const deleteUrl = url+"/"+id
  
  const handleEdit = () =>{
    navigate(`/contactEdit/${id}`)
  };

  async function handleDelete(event) {
      event.preventDefault();
      console.log(deleteUrl)

      const response = await fetch(deleteUrl, {
          method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
          });
          const res = await response.json();
          console.log(res);
          // Should probably rather update contacts by fetching again, but I wasn't able to do it so this is an temporary solution
          setContacts([...contacts].filter(obj => obj.id.toString() !== id.toString()))
          //setContacts(contacts.map(c => c.id === res.id ? res : c));
          navigate("/");
          }

  return (
    <section>
        <h3>{correctContact.firstName} {correctContact.lastName}</h3>
        <p>{correctContact.street}, {correctContact.city}</p>
        <button onClick={handleEdit}> Edit Contact</button>
        <button onClick={handleDelete}> Delete Contact</button>
    </section>
  )
}

export default ContactView;