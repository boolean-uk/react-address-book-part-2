import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


function ContactItem(props) {

  const { contact } = props
  const navigate = useNavigate()
  
  const handleDelete = () => {
    fetch(`https://boolean-api-server.fly.dev/RobinKaastrup/contact/${contact.id}`, { // Wanted to pass the URL as a prop to the component, but that refused to work and would instead use the pageURL
      method: 'DELETE'
    })
  } 

  return (
    <li>
      <Link to={`/view/${contact.id}`}>
      <span>{`${contact.firstName} ${contact.lastName}`}</span>
      </Link>
      <button className="delete-btn" onClick={() => handleDelete()}><b>DELETE</b></button>
      <button>EDIT</button>

    </li>
  )
} 

export default ContactItem

