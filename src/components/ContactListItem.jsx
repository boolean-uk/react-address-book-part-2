import { Link } from 'react-router-dom';

function ContactListItem({ contact }) {
	return (
		<>
			<li className="contact-list-item">
				<span>
					{contact.firstName} {contact.lastName}
				</span>

				<Link to={`/view/${contact.id}`}>View</Link>
			</li>
		</>
	);
}

export default ContactListItem;
