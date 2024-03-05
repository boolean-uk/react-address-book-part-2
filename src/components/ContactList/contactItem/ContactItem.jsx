import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


function ContactItem(props) {

  const { contact } = props
  const navigate = useNavigate()


  
  return (
    <li>
      <Link to={`/view/${contact.id}`}>
      <span>{`${contact.firstName} ${contact.lastName}`}</span>
      </Link>
      <button className="delete-btn"><b>DELETE</b></button>
      <button>EDIT</button>

    </li>
  )
} 

export default ContactItem

