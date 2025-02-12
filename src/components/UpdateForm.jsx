import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ContactContext } from '../App'

function UpdateForm() {
  const { id } = useParams()
  const contactContext = useContext(ContactContext)

  const [contact, setContact] = useState(null)
  const [contactData, setContactData] = useState(null)
  const navigate = useNavigate();

    useEffect(() => {
      if (contactContext.contacts && id) {
        setContact(contactContext.contacts.find((person) => Number(person.id) === Number(id)));
      } 
    }, [contactContext.contacts, id]);

    useEffect(() => {
        if(contact) setContactData(contact)
    },[contact])

  const handleChange = (event) => {
    const { id, value } = event.target;
    setContactData((prevData) => ({...prevData, [id]: value}))
  }


  async function handleSubmit(event) {
    event.preventDefault()
    
    const newContact = await postData(contactData)
    
    contactContext.setContacts((prevContacts) => [...prevContacts, newContact]);

    navigate("/")

  }

  async function postData(data){
    try{
        const response = await fetch('https://boolean-uk-api-server.fly.dev/Hafaykon/contact', {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Updating to server failed: ${errorText}`);
        }
        const jsonResponse = await response.json()
        console.log(" Updated successfully: ", jsonResponse);


        return jsonResponse

    } catch (error) {console.log("Something went wrong: ", error) }
  }

  if (!contact) {
    return <p>Loading contact...</p>;
    }

  return (
    <div className="col">
        <h2>Update contact information</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder={contact.firstName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder={contact.lastName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder={contact.gender} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City of residence</label>
                <input type="text" className="form-control" id="city" placeholder={contact.city} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="street" className="form-label">Adress</label>
                <input type="text" className="form-control" id="street" placeholder={contact.street} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder={contact.email} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default UpdateForm