import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import ".././styles.css"

function ContactListItem(contact) {

const navigate = useNavigate()

  const handleDelete = async (event) =>{
    event.preventDefault()
    console.log(event)


    try {
  
        const res = await fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${contact.contact.id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json'},
        })

        if(res.ok) {
            console.log("success contact deleted")
            navigate("/contacts")

        } else{
            console.error("Failed to delete contact")
        }
    }
    catch (error){
        console.error('Error:', error)
    }
  }
  return (
    <li className='contact-list-item'>

        <h4 className='contact-name'>
            {contact.contact.firstName} {contact.contact.lastName}
        </h4>
        <Link to = {`/contacts/${contact.contact.id}`} className='details-link'>Details</Link>
        {<button onClick={handleDelete} className='delete-button'>Delete</button>}
    </li>
  )
}

ContactListItem.propTypes = {
    contact: PropTypes.object
}

export default ContactListItem
