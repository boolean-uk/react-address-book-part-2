import { Link } from "react-router-dom"

export default function Contact({ contact, setContacts }) {
	
	//Actual delete
	// 	function handleDelete() {
	// 		const isConfirmed = window.confirm(
	// 			`Are you sure you want to delete ${contact.firstName} ${contact.lastName}?`
	// 		)

	// 		if (isConfirmed) {
	// 			fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${contact.id}`, {
	// 				method: "DELETE",
	// 			}).then(setContacts)
	// 		}
	// 	}

	//Non destructive Delete
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
		<li
			style={{
				padding: "30px",
				border: "2px solid orange",
				listStyle: "none",
				width: "300px",
			}}
		>
			<h3>
				{contact.firstName} {contact.lastName}
			</h3>
			<Link to={`/contact/${contact.id}`}>
				<button>View Contact</button>
			</Link>
			<button>Edit Contact</button>
			<Link to='/'>
				<button onClick={handleDelete}>Delete Contact</button>
			</Link>
		</li>
	)
}
