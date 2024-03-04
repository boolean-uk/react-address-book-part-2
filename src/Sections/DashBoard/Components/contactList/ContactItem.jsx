
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

ContactItem.propTypes = {
    contact: PropTypes.object
  }

export default function ContactItem(props) {
    const { contact } = props;
  return (
   <li className="contact-item">
        <div className="contact-info">
            <h3> {`${contact.firstName} ${contact.lastName}`} </h3>
            <Link className="view-link" to={`/view/${contact.id}`} state={{contact: contact}}> View </Link>
        </div>
   </li>
  )
}


// ON Hold over -> use that person -> on click view -> open view of that person?
