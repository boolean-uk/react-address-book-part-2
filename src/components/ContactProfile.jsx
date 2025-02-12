import { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../App'
import { useParams, useNavigate } from 'react-router-dom'


function ContactProfile() {
  const contactContext = useContext(ContactContext)
    const navigate = useNavigate();

  const [contact, setContact] = useState(null)
  const [deleteBox, setDeleteBox] = useState(false)
  
  const { id } = useParams(); 


  useEffect(() => {
    if (contactContext.contacts && id) {
      setContact(contactContext.contacts.find((person) => Number(person.id) === Number(id)));
    }
  }, [contactContext.contacts, id]);


  async function deleteContact() {
    try{
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Hafaykon/contact/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json'
          }
        })
        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`Deleting from server failed: ${errorText}`);
      }
      console.log("Deleted successfully: ", await response.json());

      const updatedContacts = contactContext.contacts.filter((c) => Number(c.id) !== Number(id))
      contactContext.setContacts(updatedContacts)

      navigate("/")

    } catch (error) {console.log("Something went wrong: ", error) }
  }
  

  if (!contact) return (<p>Loading...</p>)

  return (!deleteBox) ? (
    <article className='col m-5'>
      <div className='container border border-grey rounded-end p-3'>
        <img src={contact.profileImage} alt="https://www.gravatar.com/avatar/Kaylin.Aufderhar@yahoo.com?s=120&d=identicon"/>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p><b>Gender:</b> {contact.gender}</p>
        <p><b>From:</b> {contact.city}</p>
        <p><b>Email:</b> {contact.email}</p>
        <button onClick={() => setDeleteBox(true)} className="btn btn-danger ms-4 mt-3 me-n5">Delete Contact</button>
        <button onClick={() => navigate(`/view/${id}/update`)} className="btn btn-primary ms-4 mt-3 me-n5">Update Contact</button>
      </div>
    </article>
  ) : (<div className='col m-5 border border-danger rounded-end p-2'>
        <h2>Are you sure you want to delete {contact.firstName} {contact.lastName} from your contacts?</h2>
        <button onClick={() => setDeleteBox(false)} className="btn btn-primary ms-4 mt-3 me--6">Keep</button>
        <button onClick={deleteContact} className="btn btn-danger ms-4 mt-3 me--6">Delete Contact</button>
      </div>)
}

export default ContactProfile