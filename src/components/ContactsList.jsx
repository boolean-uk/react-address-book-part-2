import { useState, useEffect } from "react"
import Contact from "./Contact"

export default function ContactsList() {
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		fetch("https://boolean-api-server.fly.dev/PerikK/contact")
			.then((response) => response.json())
			.then(setContacts)
	}, [])

	return (
		<div className='contacts'>
			<h2 style={{ paddingLeft: "30px" }}>Contacts List</h2>
			<ul>
				{contacts.map((contact, id) => (
					<Contact contact={contact} key={id} setContacts={setContacts}  />
				))}
			</ul>
		</div>
	)
}
