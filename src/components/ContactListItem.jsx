import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Contact(props) {
  const { contact } = props
  return (
    <li className="li-contact">
        <h3>{contact.firstName} {contact.lastName}</h3>
        <div className="links">
          <Link to={`/view/${contact.id}`}><p>View</p></Link>
          <Link to={`/edit/${contact.id}`}><p>Edit</p></Link>
          <Link to={`/delete/${contact.id}`}><p>Delete</p></Link>
        </div>
    </li>
  )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact
