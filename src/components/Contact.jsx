import { Link } from "react-router-dom"

export default function Contact({ contact, setContacts }) {

	function handleDelete() {
		const isConfirmed = window.confirm(
			`Are you sure you want to delete ${contact.firstName} ${contact.lastName}?`
		)

		if (isConfirmed) {
			setContacts((prevContacts) =>
				prevContacts.filter(
					(currentContact) => currentContact.id !== contact.id
				)
			)
		}
	}

	return (
		<li style={{ padding: "30px", border: '2px solid orange',listStyle:'none', width:'300px' }}>
			<h3>
				{contact.firstName} {contact.lastName}
			</h3>
			<Link to={`/contact/${contact.id}`}>
				<button>View Contact</button>
			</Link>
			<button>Edit Contact</button>
			<button onClick={handleDelete}>Delete Contact</button>
		</li>
	)
}