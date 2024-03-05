import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Contact(props) {
  const { contact } = props
  return (
    <li className="li-contact">
        <h3>{contact.firstName} {contact.lastName}</h3>
        <Link to={`/view/${contact.id}`}><p>View info</p></Link>
        <Link to={`/edit/${contact.id}`}><p>Edit info</p></Link>
        <Link to={`/delete/${contact.id}`}><p>Delete info</p></Link>
    </li>
  )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact