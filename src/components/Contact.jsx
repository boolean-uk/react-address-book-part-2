import { Link } from "react-router-dom"

export default function Contact({ contact, setContacts }) {

	function handleDelete() {
		setContacts((prevContacts) =>
			prevContacts.filter((currContact) => currContact.id !== contact.id)
		);
	}

	return (
		<li style={{ paddingLeft: "30px" }}>
			<h3>
				{contact.firstName} {contact.lastName}
			</h3>
			<p>City: {contact.city}</p>
			<p>Street: {contact.street}</p>
			<p>Email: {contact.email}</p>
			<Link to={`/contact/${contact.id}`}>
				<button>View Contact</button>
			</Link>
			<button>Edit Contact</button>
			<button onClick={handleDelete}>Delete Contact</button>
		</li>
	)
}
