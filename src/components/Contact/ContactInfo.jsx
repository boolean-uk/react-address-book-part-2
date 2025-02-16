import {useState, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'


function ContactInfo () {
    const [contact, setContact] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(null)

    const url = `https://boolean-uk-api-server.fly.dev/kristofferblucher/contact/${id}`
  
    
   

const fetchContactInfo = () => {
    console.log("Fetching from URL:", url);
    fetch(url)
    .then(response => {
        if(!response.ok){
        throw new Error("Failed to fetch contact")
        }
        return  response.json();
    })

    .then(data => {
        setContact(data)
        setFormData(data)
        console.log("Here is the data:",data)
    } )
}

useEffect(() => {
    console.log(" useEffect triggered");
    console.log("ID from useParams():", id);

    if (!id) {
        console.error(" ID is undefined");
        return;
    }

    console.log(" Calling fetchContactInfo...");
    fetchContactInfo();
}, [id]);  


const handleRemove = async() => {

    await fetch(url, {
        method: 'DELETE'
    })
    navigate('/')

}

console.log("Current contact data:", contact);

return (

    <div className='contact-info'>
    <div className="contact-details">
    <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
    <p> Street: {contact.street}</p>
    <p> City: {contact.city}</p>
    <div className='contactinfo-buttons'>
        <button onClick={handleRemove}>Delete</button>
    </div>
    </div>
    </div>

)




}

export default ContactInfo