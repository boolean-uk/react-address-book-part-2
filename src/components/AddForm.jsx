import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactContext } from '../App'

function AddForm() {
  const contactContext = useContext(ContactContext)
  const [contactData, setContactData] = useState(
    {
        firstName: "",
        lastName: "",
        gender: "",
        city: "",
        street: "",
        email: "",
        profileImage: "https://www.gravatar.com/avatar/Kaylin.Aufderhar@yahoo.com?s=120&d=identicon"
    }
  )
  const navigate = useNavigate();

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
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Posting to server failed: ${errorText}`);
        }
        const jsonResponse = await response.json()
        console.log(" Posted successfully: ", jsonResponse);


        return jsonResponse

    } catch (error) {console.log("Something went wrong: ", error) }
  }


  return (
    <div className="col">
        <h2>Add new contact</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="gender" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City of residence</label>
                <input type="text" className="form-control" id="city" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="street" className="form-label">Adress</label>
                <input type="text" className="form-control" id="street" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default AddForm