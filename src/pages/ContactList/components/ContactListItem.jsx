import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ContactListItem(props) {
    const { contact } = props;
    const link = "/view/" + contact.id;


    return (
        <li>
            <Link to={link}>{contact.firstName + " " + contact.lastName}</Link>
        </li>
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactListItem;